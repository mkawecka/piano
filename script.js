const keys = document.querySelectorAll('.keys .key');
const volume = document.querySelector('.volume input');
const keysVisibility = document.querySelector('.keys-visibility');

let allKeys = [];
let audio = new Audio(`tunes/a.wav`);

const play = key => {

	audio.src = `tunes/${key}.wav`;
	audio.play();

	const clickedKey = document.querySelector(`[data-key="${key}"]`);

	clickedKey.classList.add('active');

	setTimeout(() => {
		clickedKey.classList.remove('active');
	}, 200);

	
};

keys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener('click', () => play(key.dataset.key));
});

const pressedKey = e => {
    console.log(e.key);
	if (allKeys.includes(e.key)) play(e.key);
};

const handleVolume = e => {
	audio.volume = e.target.value;
};

const hideShowKeys = () => {
	keys.forEach(key => key.classList.toggle('hide'));
};

keysVisibility.addEventListener('click', hideShowKeys);
volume.addEventListener('input', handleVolume);
document.addEventListener('keydown', pressedKey);
