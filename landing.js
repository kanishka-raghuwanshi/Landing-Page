
const chatInput = document.getElementById("chat-input");
const sendMessageButton = document.getElementById("send-message");
const chatMessages = document.getElementById("chat-messages");

sendMessageButton.addEventListener("click", () => {
    const message = chatInput.value.trim();
    if (message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message");
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatInput.value = ""; 
        chatMessages.scrollTop = chatMessages.scrollHeight; 
    }
});

const startMeditationButton = document.getElementById("start-meditation");
const audioPlayer = document.getElementById("audio-player");

startMeditationButton.addEventListener("click", () => {
    audioPlayer.play();
});


const moodDate = document.getElementById("mood-date");
const moodSelect = document.getElementById("mood-select");
const saveMoodButton = document.getElementById("save-mood");
const moodLog = document.getElementById("mood-log");

saveMoodButton.addEventListener("click", () => {
    const date = moodDate.value;
    const mood = moodSelect.value;

    if (date && mood) {
        const logEntry = document.createElement("div");
        logEntry.classList.add("mood-entry");
        logEntry.textContent = `Date: ${date}, Mood: ${mood}`;
        moodLog.appendChild(logEntry);

       
        moodDate.value = "";
        moodSelect.selectedIndex = 0;
    } else {
        alert("Please select a date and mood before saving.");
    }
});
