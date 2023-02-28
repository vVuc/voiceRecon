const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
var wordStart;
const recognition = new SpeechRecognition();

recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", (e) => {
    const word = e.results[0][0].transcript
    write(word);
    wordStart = word
})
recognition.addEventListener("end", () => {
    recognition.start();
    validationW(wordStart);
})
const btn = document.querySelector('.btnJogar')
btn.addEventListener('click', _ => window.location.reload())

function write(word) {
    document.getElementById('chute').innerHTML = `
<p>Voce disse:</p>
<span class="box">${word}</span>`
}

