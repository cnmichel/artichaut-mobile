import axios from 'axios';

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
    return await axios.post('/login', user, config())
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
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