const signupSection = document.getElementById('signup-section');
const homeSection = document.getElementById('home-section');
const userDisplay = document.getElementById('user-display');
const signupForm = document.getElementById('signupForm');

function showHome() {
  const user = localStorage.getItem('user');
  if (user) {
    const parsed = JSON.parse(user);
    userDisplay.textContent = parsed.username;
    signupSection.classList.add('hidden');
    homeSection.classList.remove('hidden');
  } else {
    alert('Please sign up first!');
    showSignup();
  }
}

function showSignup() {
  signupSection.classList.remove('hidden');
  homeSection.classList.add('hidden');
}

signupForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  localStorage.setItem('user', JSON.stringify({ username, email, password }));

  alert('Signup successful!');
  showHome();
});

function logout() {
  localStorage.removeItem('user');
  showSignup();
}
