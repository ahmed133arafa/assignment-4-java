let users = []; // Array to store registered users
let loggedInUser = null;

const loginContainer = document.getElementById('loginContainer');
const homeContainer = document.getElementById('homeContainer');
const signupContainer = document.getElementById('signupContainer');
const loginForm = document.getElementById('loginForm');
const signupLink = document.getElementById('signupLink');
const backToLogin = document.getElementById('backToLogin');
const loginError = document.getElementById('loginError');
const welcomeMessage = document.getElementById('welcomeMessage');
const logoutBtn = document.getElementById('logoutBtn');
const signupForm = document.getElementById('signupForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const user = users.find(user => user.email === email);

  if (!user) {
    showLoginError('Email not registered. Please sign up.');
    return;
  }

  if (user.password !== password) {
    showLoginError('Incorrect password. Please try again.');
    return;
  }

  loggedInUser = user;
  showHomePage();
});

signupLink.addEventListener('click', function(event) {
  event.preventDefault();
  showSignupForm();
});

backToLogin.addEventListener('click', function(event) {
  event.preventDefault();
  showLoginForm();
});

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  // For simplicity, let's assume successful registration without validation
  const newUser = { name, email, password };
  users.push(newUser);
  loggedInUser = newUser;
  showHomePage();
});

logoutBtn.addEventListener('click', function() {
  loggedInUser = null;
  showLoginForm();
});

function showLoginForm() {
  loginContainer.style.display = 'block';
  homeContainer.style.display = 'none';
  signupContainer.style.display = 'none';
  clearLoginError();
}

function showSignupForm() {
  loginContainer.style.display = 'none';
  homeContainer.style.display = 'none';
  signupContainer.style.display = 'block';
  clearLoginError();
}

function showHomePage() {
  loginContainer.style.display = 'none';
  homeContainer.style.display = 'block';
  signupContainer.style.display = 'none';
  welcomeMessage.textContent = `Welcome, ${loggedInUser.name}!`;
  clearLoginError();
}

function showLoginError(message) {
  loginError.textContent = message;
}

function clearLoginError() {
  loginError.textContent = '';
}

showLoginForm(); // Initially show login form
