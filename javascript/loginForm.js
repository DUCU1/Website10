const loginForm = document.getElementById('loginForm');
const gameQuery = document.querySelector('.gameQuery');

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
    if (user.role === 'admin') {
        playerNameField.disabled = false;
    } else {
        playerNameField.disabled = true;
    }
}

function logout() {
    loginForm.style.display = 'block';
    gameQuery.style.display = 'none';
    emptyFields();
}

function emptyFields(){
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    login();
});

const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', logout);
