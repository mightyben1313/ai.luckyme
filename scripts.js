// Pop-Up Form Logic
function openContactForm() {
    document.getElementById("popupForm").style.display = "flex";
}

function closeContactForm() {
    document.getElementById("popupForm").style.display = "none";
}

// Telegram API Integration
function sendMessage() {
    const name = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phoneNumber").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && phone && message) {
        const telegramAPI = "https://api.telegram.org/bot7636367334:AAE6d7AShLfccWJWMkyffSVrvpkURjfqtPY/sendMessage";
        const chatID = "874563737";
        const text = `New Contact Request:\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;

        fetch(`${telegramAPI}?chat_id=${chatID}&text=${encodeURIComponent(text)}`)
            .then(response => {
                if (response.ok) {
                    alert("Message sent successfully!");
                    closeContactForm();
                    document.getElementById("fullName").value = "";
                    document.getElementById("phoneNumber").value = "";
                    document.getElementById("message").value = "";
                } else {
                    alert("Failed to send message. Please try again.");
                }
            })
            .catch(error => alert("Error: " + error));
    } else {
        alert("Please fill out all fields.");
    }
}