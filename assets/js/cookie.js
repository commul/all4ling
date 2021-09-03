// based on https://github.com/kolappannathan/bootstrap-cookie-banner
// MIT

function showCookieBanner(){
  let cookieBanner = document.getElementsByClassName("nk-cookie-banner")[0];
  cookieBanner.style.display = "block";
}
/* Hides the Cookie banner and saves the value to localstorage */
function hideCookieBanner(){
  localStorage.setItem("web_dev_isCookieAccepted", "yes");
  let cookieBanner = document.getElementsByClassName("nk-cookie-banner")[0];
  cookieBanner.style.display = "none";
}
/* Checks the localstorage and shows Cookie banner based on it. */
function initializeCookieBanner(){
  let isCookieAccepted = localStorage.getItem("web_dev_isCookieAccepted");
  if(isCookieAccepted === null){
    localStorage.clear();
    localStorage.setItem("web_dev_isCookieAccepted", "no");
    showCookieBanner();
  }
  if(isCookieAccepted === "no"){
    showCookieBanner();
  }
}

window.onload = initializeCookieBanner();
window.nk_hideCookieBanner = hideCookieBanner;
