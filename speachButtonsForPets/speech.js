function speakText(text) {
    // Check if the browser supports speech synthesis
    if ('speechSynthesis' in window) {
        // Create a new instance of SpeechSynthesisUtterance
        let utterance = new SpeechSynthesisUtterance(text);

        // Optional: Set voice, pitch, rate, and volume
        utterance.voice = speechSynthesis.getVoices()[0]; // Default voice
        utterance.pitch = 1; // Range: 0 to 2
        utterance.rate = 1; // Range: 0.1 to 10
        utterance.volume = 1; // Range: 0 to 1

        // Speak the utterance
        speechSynthesis.speak(utterance);
    } else {
        alert('Speech Synthesis not supported in this browser.');
    }
}