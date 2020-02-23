import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://api.stackexchange.com/2.2/',
});