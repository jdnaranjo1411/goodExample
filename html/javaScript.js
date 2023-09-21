const Wrapper = document.querySelector('.Wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLogin = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    Wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    Wrapper.classList.remove('active');
});

btnLogin.addEventListener('click', () => {
    Wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    Wrapper.classList.remove('active-popup');
});
