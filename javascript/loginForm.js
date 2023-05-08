// Check if the user is already logged in
if (window.localStorage.getItem('loggedIn') === 'true') {
    // Display logout button instead of login button
    document.getElementById('loginButton').innerHTML = 'Logout';

    // Enable the query form link
    document.getElementById('queryFormLink').style.display = 'block';

    // Open the query form
    document.getElementById('queryForm').style.display = 'block';
}

// Add a click event listener to the login/logout button
document.getElementById('loginButton').addEventListener('click', function() {
    if (window.localStorage.getItem('loggedIn') === 'true') {
        // User is logged in, so log them out
        window.localStorage.setItem('loggedIn', 'false');

        // Hide the query form
        document.getElementById('queryForm').style.display = 'none';

        // Disable the query form link
        document.getElementById('queryFormLink').style.display = 'none';

        // Change the login/logout button text to "Login"
        this.innerHTML = 'Login';
    } else {
        // User is not logged in, so log them in
        window.localStorage.setItem('loggedIn', 'true');

        // Enable the query form link
        document.getElementById('queryFormLink').style.display = 'block';

        // Open the query form
        document.getElementById('queryForm').style.display = 'block';

        // Change the login/logout button text to "Logout"
        this.innerHTML = 'Logout';
    }
});