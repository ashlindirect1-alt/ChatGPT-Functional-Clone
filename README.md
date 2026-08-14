# ChatGPT Functional Clone

A functional web-based AI chatbot inspired by ChatGPT. This project allows users to enter questions and receive AI-generated responses through the Gemini API.

## 🚀 Features

* 💬 Chat interface for asking questions
* 🤖 AI-generated responses using the Gemini API
* 📝 Conversation history
* 💾 Chat history stored using browser localStorage
* ⏳ Loading indicator while the AI generates a response
* 🆕 New Chat functionality
* 📱 Responsive design for desktop and mobile devices
* 🔐 API key stored securely using environment variables

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* Node.js
* Express.js
* Google Gemini API
* LocalStorage
* dotenv

## 📁 Project Structure

```text
ChatGPT-Functional-Clone/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

## ⚙️ Setup Instructions

### 1. Clone the Repository

Clone this project from GitHub:

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### 2. Open the Project

Open the project folder in Visual Studio Code.

### 3. Install Dependencies

Open the terminal and run:

```bash
npm install
```

### 4. Create the Environment File

Create a file named:

```text
.env
```

Add your Gemini API key:

```env
GEMINI_API_KEY=YOUR_API_KEY_HERE
```

Do not share or publish your API key.

### 5. Start the Server

Run:

```bash
node server.js
```

The server should start at:

```text
http://localhost:3000
```

### 6. Open the Application

Open your browser and visit:

```text
http://localhost:3000
```

## 💬 How to Use

1. Open the chatbot.
2. Type your question in the message box.
3. Click the **Send** button.
4. Wait for the AI-generated response.
5. Continue the conversation.
6. Previous messages are saved in browser localStorage.
7. Click **New Chat** to start a fresh conversation.

## 🔐 Security

The  Gemini API key is stored in the `.env` file and should never be exposed in frontend JavaScript or uploaded to GitHub.

The `.env` file is included in `.gitignore` to prevent accidental upload.

## 📱 Responsive Design

The application is designed to work on:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

## 🎯 CWI Task 33 Requirements

This project fulfills the following requirements:

* ✅ Functional AI chatbot
* ✅ Chat interface
* ✅ Gemini API integration
* ✅ AI-generated responses
* ✅ Conversation history
* ✅ Loading indicator
* ✅ Chat history storage
* ✅ Responsive design
* ✅ GitHub README documentation

## 👩‍💻 Author

**Ashlin Naeem**

BS Information Technology

## 📌 Project Links

**Live Clone:**
Add your deployed project link here.

**GitHub Repository:**
Add your GitHub repository link here.
