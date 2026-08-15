const express = require("express");
const path = require("path");
const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const app = express();

// Railway provides PORT automatically
const PORT = process.env.PORT || 3000;

// Check Gemini API key
if (!process.env.GEMINI_API_KEY) {
    console.error("ERROR: GEMINI_API_KEY is missing.");
    process.exit(1);
}

// Gemini
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Chat API
app.post("/api/chat", async (req, res) => {
    try {
        const userMessage = req.body.message;

        if (!userMessage || !userMessage.trim()) {
            return res.status(400).json({
                error: "Message is required"
            });
        }

        const response = await ai.models.generateContent({
            model: "gemini-flash-latest",
            contents: userMessage
        });

        const reply = response.text;

        console.log("Gemini:", reply);

        res.json({
            reply: reply
        });

    } catch (error) {
        console.error("Gemini API Error:", error);

        res.status(500).json({
            error: error.message || "Gemini API request failed."
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});