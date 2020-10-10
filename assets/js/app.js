const $button = document.querySelector(".fart__button");
const $image = document.querySelector(".fart__image");
const getAudio = () => {
    const audioName = (Math.random() * 10).toFixed(0);
    return new Audio(`assets/media/audio/fart-0${audioName}.mp3`)
}

const showFart = () => {
    $image.classList.toggle('active')
}

const fart = () => {
    const fartSound = getAudio();
    showFart();
    fartSound.play();
    setTimeout(() => showFart(), 1500);
}

$button.addEventListener('click', fart);
