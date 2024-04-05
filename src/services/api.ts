import axios, { AxiosInstance } from 'axios';

type SignOut = () => void;

type APIInstaceProps = AxiosInstance & {
  registerInterceptTokenManeger: (signOut: SignOut) => () => void;
};

const api = axios.create({
  baseURL: 'https://api-ignite-gym.vercel.app/',
}) as APIInstaceProps;

let isRefreshing = false;

api.registerInterceptTokenManeger = (signOut) => {
  const interceptTokenManeger = api.interceptors.response.use(
    (response) => response,
    async (requestError) => {
      if (requestError.response?.status === 401) {
        if (
          requestError.response.data?.message === 'token.expired' ||
          requestError.response.data?.message === 'token.invalid'
        ) {
        }
      }
    }
  );

  return () => {
    api.interceptors.response.eject(interceptTokenManeger);
  };
};

export { api };
