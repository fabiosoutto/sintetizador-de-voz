const speakButton = document.querySelector('#speak');
const textArea = document.querySelector('#text');

speakButton.addEventListener('click', () => {
	const text = textArea.value;
	const synth = window.speechSynthesis;
	const utterance = new SpeechSynthesisUtterance(text);
	utterance.voice = synth.getVoices().find(voice => voice.name === 'Joana');
	utterance.pitch = 1.0;
	utterance.rate = 1.0;
	synth.speak(utterance);
});