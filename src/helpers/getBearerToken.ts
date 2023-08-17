import { token } from '../constants/locatStorageItems';

export const getBearerToken = () => localStorage.getItem(token);
