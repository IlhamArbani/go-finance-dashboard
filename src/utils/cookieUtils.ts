import Cookies from 'js-cookie';
import secure from "./secureUtils";
import { COOKIES } from '@/constants';

export const setAuth = (item:string) => {
  const dataEncryption = secure.encrypt(item);
  Cookies.set(COOKIES.AUTH, dataEncryption);
};

export const getAuth = () => {
  const authentications = Cookies.get(COOKIES.AUTH) || '';
  const dataDecryption = authentications ? secure.decrypt(authentications) : null;
  return dataDecryption ? JSON.parse(dataDecryption) : null;
};