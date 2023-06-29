import axios from 'axios';
import Store from '../services/Store';
import { LangCodesEnum } from '../enums/modules/LangCodesEnum';

const { getItem } = Store();

const baseUrl = process.env.REACT_APP_BASE_URL;

// Get the locale from local storage if there is one or from navigator
const locale = await getItem('language');
const token = await getItem('token');

// Axios request config
// @ts-ignore
const config = {
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`
  },
  params: {
    // @ts-ignore
    'lang_id': LangCodesEnum[locale]
  }
}

 export default function Api() {

  // LANGS API

  async function getLangs() {
    return axios.get('/langs', config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }


  // USERS API

  async function getUsers() {
    return axios.get('/users', config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function getCurrentUser() {
    return axios.get(`/users/current`, config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function getUser(id: number) {
    return axios.get(`/users/${id}`, config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }


  // CUSTOMERS API

  async function getCustomer(id: number) {
    return axios.get(`/customers/${id}`, config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function createCustomer(data: any) {
    return axios.post('/customers', data, config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function updateCustomer(id: number, data: any) {
    return axios.put(`/users/${id}`, data, config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }


  // RESERVATIONS API

  async function getCustomerReservations() {
    return axios.get('/reservations/customer', config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function createReservation(data: any) {
     return axios.post(`/reservations`, data, {
       baseURL: baseUrl,
       headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`,
         "Content-Type": "application/json"
       },
     })
       .then((res) => res.data)
       .catch((err) => errorHandler(err));
   }


  // REVIEWS API

  async function getReviews() {
    return axios.get('/reviews', config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function getReview(id: number) {
    return axios.get(`/reviews/${id}`, config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function createReview(data: any) {
    return axios.post(`/reviews`, data, config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function updateReview(id: number, data: any) {
    return axios.put(`/reviews/${id}`, data, config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function deleteReview(id: number) {
    return axios.delete(`/reviews/${id}`, config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }


  // ARTICLES API

  async function getArticles() {
    return axios.get('/articles', config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function getArticle(id: number) {
    return axios.get(`/articles/${id}`, config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }


  // FEATURES API

  async function getFeatures() {
    return axios.get('/features', config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function getFeature(id: number) {
    return axios.get(`/features/${id}`, config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }


  // PRODUCTS API

  async function getProducts() {
    return axios.get('/products', config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function getProduct(id: number) {
    return axios.get(`/products/${id}`, config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }


  // PROMOS API

  async function getPromos() {
    return axios.get('/promos', config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function getPromo(id: number) {
    return axios.get(`/promos/${id}`, config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function getActivePromo() {
    return axios.get(`/promos/`,
      {
        baseURL: baseUrl,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        params: {active: "1"},
      })
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }


  // HEROES API

  async function getHeroes() {
    return axios.get('/heroes', config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function getHero(id: number) {
    return axios.get(`/heroes/${id}`, config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }


  // VIDEOS API

  async function getVideos() {
    return axios.get('/videos', config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function getVideo(id: number) {
    return axios.get(`/videos/${id}`, config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function getActiveVideo() {
    return axios.get(`/videos/`,
      {
        baseURL: baseUrl,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        params: {active: "1"},
      })
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }


  // SITEMAPS API

  async function getSitemaps() {
    return axios.get('/sitemaps', config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function getSitemap(id: number) {
    return axios.get(`/sitemaps/${id}`, config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }


  // SOCIALS API

  async function getSocials() {
    return axios.get('/socials', config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  async function getSocial(id: number) {
    return axios.get(`/socials/${id}`, config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }


  // LIST OF AVAILABLE ROOMS

  async function getAvailable(start: string, end: string) {
    return axios.get(`/getAvailable`, { params: { start_date: start, end_date: end }, baseURL: baseUrl, })
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  // LIST OF AVAILABLE PRODUCTS

  async function getProductsByCategory(id: number) {
    return axios.get(`/getProductsByCategory/${id}`, config)
      .then((res) => res.data)
      .catch((err) => errorHandler(err));
  }

  function errorHandler(error: any) {
    const { response } = error;
    const message = {
      status: response.status,
      message: response.data.message
    }
    return console.error(message);
  }

  return {
    getLangs,
    getUsers,
    getCurrentUser,
    getUser,
    getCustomer,
    createCustomer,
    updateCustomer,
    getCustomerReservations,
    createReservation,
    getReviews,
    getReview,
    getArticles,
    getArticle,
    getFeatures,
    getFeature,
    getProducts,
    getProduct,
    getPromos,
    getPromo,
    getActivePromo,
    getHeroes,
    getHero,
    getVideos,
    getVideo,
    getActiveVideo,
    getSitemaps,
    getSitemap,
    getSocials,
    getSocial,
    getAvailable,
    getProductsByCategory
  }
}