const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendBtn");
const chatForm = document.getElementById("chatForm");
const newChatButton = document.getElementById("newChatBtn");
const historyList = document.getElementById("historyList");

let conversations =
    JSON.parse(localStorage.getItem("chatHistory")) || [];

// ===============================
// ADD MESSAGE TO CHAT
// ===============================

function addMessage(message, sender) {
    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message");

    if (sender === "user") {
        messageDiv.classList.add("user-message");
    } else {
        messageDiv.classList.add("ai-message");
    }

    const contentDiv = document.createElement("div");

    contentDiv.classList.add("message-content");

    contentDiv.textContent = message;

    messageDiv.appendChild(contentDiv);

    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// ===============================
// SHOW LOADING
// ===============================

function showLoading() {
    const loadingDiv = document.createElement("div");

    loadingDiv.classList.add("message", "ai-message");

    loadingDiv.id = "loadingMessage";

    loadingDiv.innerHTML = `
        <div class="message-content loading">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

    chatMessages.appendChild(loadingDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// ===============================
// REMOVE LOADING
// ===============================

function removeLoading() {
    const loading = document.getElementById("loadingMessage");

    if (loading) {
        loading.remove();
    }
}


// ===============================
// SAVE CHAT HISTORY
// ===============================

function saveConversation(userMessage, aiMessage) {

    conversations.push({
        user: userMessage,
        ai: aiMessage,
        time: new Date().toLocaleString()
    });

    localStorage.setItem(
        "chatHistory",
        JSON.stringify(conversations)
    );

    displayHistory();
}


// ===============================
// DISPLAY CHAT HISTORY
// ===============================

function displayHistory() {

    historyList.innerHTML = "";

    conversations.forEach((conversation, index) => {

        const item = document.createElement("div");

        item.classList.add("history-item");

        item.textContent = conversation.user;

        item.addEventListener("click", () => {

            chatMessages.innerHTML = "";

            addMessage(conversation.user, "user");

            addMessage(conversation.ai, "ai");

        });

        historyList.appendChild(item);
    });
}


// ===============================
// SEND MESSAGE
// ===============================

async function sendMessage() {

    const message = messageInput.value.trim();

    if (!message) {
        return;
    }

    // Show user's message
    addMessage(message, "user");

    // Clear input
    messageInput.value = "";

    // Disable button
    sendButton.disabled = true;

    sendButton.textContent = "Thinking...";

    // Show loading
    showLoading();

    try {

        const response = await fetch("/api/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })
        });


        const data = await response.json();

        removeLoading();


        if (!response.ok) {

            throw new Error(
                data.error || "Server error"
            );
        }


        // Display AI response
        addMessage(data.reply, "ai");


        // Save conversation
        saveConversation(
            message,
            data.reply
        );


    } catch (error) {

        removeLoading();

        console.error("Chat Error:", error);

        addMessage(
            "Sorry, something went wrong. Please try again.",
            "ai"
        );
    }


    // Enable button again
    sendButton.disabled = false;

    sendButton.textContent = "Send";
}


// ===============================
// FORM SUBMIT
// ===============================

chatForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        sendMessage();
    }
);


// ===============================
// NEW CHAT
// ===============================

newChatButton.addEventListener(
    "click",
    function () {

        chatMessages.innerHTML = `
            <div class="welcome-message">

                <h2>How can I help you?</h2>

                <p>
                    Ask me anything and I'll try to help.
                </p>

            </div>
        `;

        messageInput.value = "";

        messageInput.focus();
    }
);


// ===============================
// LOAD HISTORY
// ===============================

displayHistory();