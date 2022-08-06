import * as AuthService from '../services/authentication';

export const checkIsLoggedIn = () => {
  const token = AuthService.getToken();
  if (!token) {
    window.alert("Vui lòng đăng nhập");
    return;
  }
};