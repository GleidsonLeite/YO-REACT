import jwt from 'jsonwebtoken';

export const verifyExpiredToken = (token: string): boolean => {
  try {
    const { exp } = jwt.decode(token) as { exp: number };
    const expirationDateTimeInSeconds = exp * 1000;
    return Date.now() >= expirationDateTimeInSeconds;
  } catch {
    return true;
  }
};
