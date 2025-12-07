
const passwordInput = document.querySelector(".password-username");
const togglePassword = document.querySelector(".eye-icon");

togglePassword.addEventListener('click', function () {
  const isPassword = passwordInput.getAttribute('type') === 'password';
  if (isPassword) {
    passwordInput.setAttribute('type', 'text');
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    passwordInput.setAttribute('type', 'password');
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }
});


