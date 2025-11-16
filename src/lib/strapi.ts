import axios from 'axios';

export const strapi = axios.create({
  baseURL: 'http://127.0.0.1:5432/api',
  headers: {
    Accept: 'application/json',
  },
});
