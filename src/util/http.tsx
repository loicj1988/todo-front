import axios, { AxiosInstance } from 'axios';

console.log('XXXX');
console.log(process.env.REACT_APP_API_URL);
const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export default instance;
