document.getElementById('avatar-upload').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the selected file
    const reader = new FileReader(); // Create a FileReader object
  
    // Define a function to handle when the FileReader has loaded the image
    reader.onload = function(event) {
      const imgSrc = event.target.result; // Get the base64 data of the image
      document.querySelector('.avatar-preview img').src = imgSrc; // Set the src attribute of the img element
    };
  
    // Read the selected file as a data URL (base64)
    reader.readAsDataURL(file);
  });
  
  document.getElementById('next-button').addEventListener('click', function(event) {
    // Get the values of the image and location fields
    const avatar = document.getElementById('avatar-upload').files[0];
    const location = document.getElementById('location').value;

    // Check if both fields are filled
    if (avatar && location) {
        // If both fields are filled, navigate to the explore page
        window.location.href = 'explore.html';
    } else {
        // If any field is empty, display an alert
        alert('Please fill out both fields.');
    }
});