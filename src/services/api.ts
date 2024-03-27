import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-ignite-gym.vercel.app/',
});

export { api };
