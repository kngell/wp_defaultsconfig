export const BASE_URL = /kngell_ecommerce/;
export const AVATAR = BASE_URL + "public/assets/img/users/avatar.png";
export const IMG = BASE_URL + "public/assets/img/";

export const isIE = () => {
  var userAgent = navigator.userAgent;
  return /MSIE|Trident/.test(userAgent);
};
