// Handle user input and generate AI responses
document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim()) {
        // Display user input
        const userMessage = document.createElement('p');
        userMessage.textContent = "You: " + userInput;
        document.getElementById('chat-log').appendChild(userMessage);
        
        // Generate AI response
        const botResponse = generateBotResponse(userInput);
        
        // Display bot response
        const botMessage = document.createElement('p');
        botMessage.textContent = "AI: " + botResponse;
        document.getElementById('chat-log').appendChild(botMessage);
        
        // Scroll to the latest message
        document.getElementById('chat-log').scrollTop = document.getElementById('chat-log').scrollHeight;

        // Clear input field
        document.getElementById('user-input').value = '';
    }
});

// Simple AI responses
function generateBotResponse(input) {
    const lowercaseInput = input.toLowerCase();
    
    if (lowercaseInput.includes("hello") || lowercaseInput.includes("hi")) {
        return "Hello! How can I help you today?";
    } else if (lowercaseInput.includes("game")) {
        return "Nice! What game are you playing?";
    } else if (lowercaseInput.includes("favorite")) {
        return "I love all kinds of games! What about you?";
    } else if (lowercaseInput.includes("help")) {
        return "I am here to assist you! What do you need help with?";
    } else if (lowercaseInput.includes("goodbye")) {
        return "Goodbye! Talk to you later!";
    } else {
        return "I’m not sure how to respond to that. Can you ask something else?";
    }
}
