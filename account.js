const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');

loginBtn.addEventListener('click', () => {
  loginBtn.classList.add('active');
  registerBtn.classList.remove('active');
  loginForm.classList.add('active');
  registerForm.classList.remove('active');
  forgotPasswordForm.classList.remove('active');
});

registerBtn.addEventListener('click', () => {
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
  registerForm.classList.add('active');
  loginForm.classList.remove('active');
  forgotPasswordForm.classList.remove('active');
});

forgotPasswordLink.addEventListener('click', (e) => {
  e.preventDefault();
  forgotPasswordForm.classList.add('active');
  loginForm.classList.remove('active');
  registerForm.classList.remove('active');
});