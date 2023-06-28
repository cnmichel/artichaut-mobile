import axios from 'axios';

// Axios request config
const config = (token) => ({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

// Connexion utilisateur via l'API
export async function login(user) {
    return await axios.post('/login', user, config())
        .then((res) => res.data)
        .catch((err) => errorHandler(err));
}

// Création utilisateur via l'API
export async function register(user) {
    return await axios.post('/register', user, config())
        .then((res) => res.data)
        .catch((err) => errorHandler(err));
}

// Vérification de l'existence du token
export async function verifyToken(token) {
    return axios.post('/verifyToken', {}, config(token))
        .then((res) => res.data)
        .catch((err) => errorHandler(err));
}

// Récupération des données de l'utilisateur à partir de son token
export async function getUserByToken(token)
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
export async function checkAdmin(token) {
    return getUserByToken(token).then((data) => {
        return data.user.role_id === 1;
    })
}

export async function revokeToken(token) {
    return await axios.post('/revokeToken', {}, config(token))
        .then((res) => res.data)
        .catch((err) => errorHandler(err));
}

function errorHandler(error) {
    const { response } = error;
    const message = {
        status: response.status,
        message: response.data.message
    }
    console.error(message);
    return message;
}