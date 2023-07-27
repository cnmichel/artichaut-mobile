import axios, { AxiosResponse }  from 'axios';

// Axios request config
const config = (token?: string) => ({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export default function Auth() {

  // Authentification de l'utilisateur via l'API
  async function login(user: any) {
    try {
      const response: AxiosResponse = await axios.post('/login', user, config());
      // Si la réponse de l'API est valide et contient un token
      if (response.data && response.data.token) {
        return { success: true, data: response.data };
      } else {
        return { success: false, message: "Identifiants incorrects" };
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        return { success: false, message: "Identifiants incorrects" };
      } else {
        return { success: false, message: "Une erreur s'est produite lors de la connexion." };
      }
    }
  }


  // Création utilisateur via l'API
  async function register(user: any) {
    return await axios.post('/register', user, config())
        .then((res) => res.data)
        .catch((err) => errorHandler(err));
  }

  // Vérification de l'existence du token de l'utilisateur
  async function verifyToken(token: string) {
    return axios.post('/verifyToken', {}, config(token))
        .then((res) => res.data)
        .catch((err) => errorHandler(err));
  }

  // Suppression du token utilisateur
  async function revokeToken(token: string) {
    return await axios.post('/revokeToken', {}, config(token))
        .then((res) => res.data)
        .catch((err) => errorHandler(err));
  }

  // Récupération des données de l'utilisateur à partir de son token
  async function getUserByToken(token: string)
  {
    return verifyToken(token).then(async () => {
      return axios.post('/getUserByToken', {}, config(token))
          .then((res) => res.data)
          .catch((err) => errorHandler(err));
    }).catch(({ response }) => {
      if (response.status === 401) {
        console.log('token invalid');
      }
    })
  }

  // Vérification du rôle de l'utilisateur
  async function checkAdmin(token:string) {
    return getUserByToken(token).then((data) => {
      return data.user.role_id === 1;
    })
  }

  function errorHandler(error: any) {
    const { response } = error;
    const message = {
      status: response.status,
      message: response.data.message
    }
    console.error(message);
    return message;
  }

  return {
    login,
    register,
    verifyToken,
    revokeToken,
    getUserByToken,
    checkAdmin,
  }
}


