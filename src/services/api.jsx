import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  // baseURL: 'https://geronimo-today.herokuapp.com/',
});

export default api;
