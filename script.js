document.getElementById("giveaway-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Display a response message
    const responseMessage = document.getElementById("response-message");
    responseMessage.textContent = `Thank you, ${name}! You have entered the giveaway with the email: ${email}.`;
    responseMessage.style.color = "green"; // Optional: Change the text color to green

    // Optionally, reset the form
    document.getElementById("giveaway-form").reset();
});
