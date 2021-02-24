import { verifyExpiredToken } from './verifyExpiredToken';

const verifyIfIsUserLogged = (): boolean => {
  const token = localStorage.getItem('@YO:token');
  if (token) {
    const isTokenExpired = verifyExpiredToken(token);
    return !isTokenExpired;
  }
  return false;
};

export default verifyIfIsUserLogged;
