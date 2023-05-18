const loginForm = document.getElementById('login-form');
const gameQuery = document.querySelector('.sidebar');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const tableContainer = document.getElementById('tableContainer');

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = usersJSON.find(user => user.username === username && user.password === password);
    if (user) {
        enableGameQuery(user);
        loginForm.style.display = 'none';
    } else {
        alert('Invalid username or password. Please try again.');
        emptyFields();
    }
}

function enableGameQuery(user) {
    const queryForm = document.getElementById('queryForm');
    const playerNameField = document.getElementById('playerName');

    gameQuery.style.display = 'block';

    playerNameField.value = user.username;
    playerNameField.disabled = user.role !== 'admin';
}

function logout() {
    loginForm.style.display = 'block';
    gameQuery.style.display = 'none';
    tableContainer.style.display = 'none';
    emptyFields();
}

function emptyFields(){
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    login();
});
logoutButton.addEventListener('click', logout);