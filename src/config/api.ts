import axios from 'axios';

const api = axios.create({
  baseURL: 'https://keyclock.cluster-dev.ioasys.com.br/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export default api;
