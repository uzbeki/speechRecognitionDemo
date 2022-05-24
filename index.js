window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
// window.SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
// window.SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.continuous = true;
recognition.lang = "ja-JP";

const listen = e => {
    document.getElementById("results").value = "listening...";
    e.target.classList.add("listening");
    recognition.start();
};

const stop = e => {
    recognition.stop();
    document.getElementById("results").value = "";
    document.getElementById("startBtn").classList.remove("listening");
};

document.getElementById("startBtn").onclick = listen;
document.getElementById("stopBtn").onclick = stop;

recognition.addEventListener("result", e => {
    const spResult = [...e.results].map(result => result[0].transcript).join("\n");
    document.getElementById("results").value = spResult;
    document.getElementById("results").scrollTop = document.getElementById("results").scrollHeight;
});

recognition.onend = () => recognition.start();