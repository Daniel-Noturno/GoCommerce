import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5cd1df1ed935aa00141496fa.mockapi.io',
});

export default api;
