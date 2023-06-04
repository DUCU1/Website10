const loginForm = document.getElementById('login-form');
const gameQuery = document.querySelector('.sidebar');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const tableContainer = document.getElementById('tableContainer');

function login() {
    //Values of username and password are stored in two variables
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //Go over the usersJSON file to get the username and password
    //Compare it with the username and password from the input fields
    const user = usersJSON.find(user => user.username === username && user.password === password);
    if (user) { //Check enableGameQuery and loginForm hide
        enableGameQuery(user);
        loginForm.style.display = 'none';
    } else { //Check invalid, error message
        alert('Invalid username or password. Please try again.');
        emptyFields();
    }
}

function enableGameQuery(user) {//Enables the game query
    const queryForm = document.getElementById('queryForm');
    const playerNameField = document.getElementById('playerName');

    gameQuery.style.display = 'block';
    //Fil username automatically in
    playerNameField.value = user.username;
    //If he is not admin disable the playerName field so he can't change it
    playerNameField.disabled = user.role !== 'admin';
}

function logout() {//Hide gameQuery etc and show the loginForm
    loginForm.style.display = 'block';
    gameQuery.style.display = 'none';
    tableContainer.style.display = 'none';
    emptyFields();
}

function emptyFields(){//Empty the input fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
//When loginButton is clicked == call login function
loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    login();
});
logoutButton.addEventListener('click', logout); //When logout button is clicked call function logout