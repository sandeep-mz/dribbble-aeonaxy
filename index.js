
document.getElementById('signup-form').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Check if all required fields are filled
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;

    if (name && username && email && password && terms) {
        // If all fields are filled, redirect to welcome.html
        console.log('All fields filled'); // Debugging statement
        window.location.href = './components/welcome.html';
    } else {
        // If any required field is missing, show an error message
        console.log('Missing required field');
        alert('Please fill out all required fields.');
    }
});
