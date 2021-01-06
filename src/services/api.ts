import axios from 'axios';

const api = axios.create({
  baseURL: 'http://159.89.159.20:3333',
});

export default api;
