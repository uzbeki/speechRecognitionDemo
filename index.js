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
    console.log(e.results);
    const result = e.results[0][0].transcript;
    document.getElementById("results").value = result;
    if (e.results[0].isFinal) {
        document.getElementById("results").value = result + " ✅";
    }
});
