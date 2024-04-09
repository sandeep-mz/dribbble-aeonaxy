// // Get all card elements
const cards = document.querySelectorAll('.card');

// Add click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Toggle the visibility of description
        const description = card.querySelector('.card-description');
        description.style.display = (description.style.display === 'none') ? 'block' : 'none';
    });
});

document.getElementById("finish-button").addEventListener("click", function() {
    // Check if any checkbox is checked
    const checkboxes = document.querySelectorAll(".checkbox");
    let isChecked = false;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            isChecked = true;
            return;
        }
    });
    // If any checkbox is checked, redirect to the verification page
    if (isChecked) {
        window.location.href = "verification.html"; // Replace "verification_page.html" with the actual URL of the verification page
    } else {
        // Otherwise, show an alert or any other message to prompt the user to select an option
        alert("Please select an option before finishing.");
    }
});