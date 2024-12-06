function getAIResponse() {
    let userInput = document.getElementById("user-input").value;
    let aiResponse = document.getElementById("ai-response");

    // Simple responses based on user input
    let response = "";
    
    if (userInput.includes("hello")) {
        response = "Hello! How can I help you today?";
    } else if (userInput.includes("background")) {
        response = "I can change the background color! Which color do you prefer?";
    } else if (userInput.includes("change color")) {
        document.body.style.backgroundColor = "lightblue";  // Change background color dynamically
        response = "Background color changed to light blue!";
    } else {
        response = "I'm sorry, I didn't understand that. Try asking something else.";
    }

    // Display the response in the chatbox
    aiResponse.innerHTML += "<div><strong>AI:</strong> " + response + "</div>";
    document.getElementById("user-input").value = "";  // Clear input field
}
