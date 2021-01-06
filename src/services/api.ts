import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yo.setatornearia.com.br:443',
});

export default api;
