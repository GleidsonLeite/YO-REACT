import { AxiosRequestConfig } from 'axios';

const getConfigToRequestWithToken = ({
  ...rest
}: AxiosRequestConfig): AxiosRequestConfig => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('@YO:token')}` },
    ...rest,
  } as AxiosRequestConfig;
  return config;
};

export default getConfigToRequestWithToken;
