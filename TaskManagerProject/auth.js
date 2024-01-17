// auth.js

document.getElementById('auth-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Your authentication logic here (e.g., sending data to the server and checking if authentication is successful)

    // Assuming authentication is successful, redirect to the index page
    // You can use window.location.href or any other preferred method
    window.location.href = 'index.html';
});