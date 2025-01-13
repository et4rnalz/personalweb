document.addEventListener('DOMContentLoaded', function () {
    const splashScreen = document.getElementById('splash-screen');
    const blurredContent = document.querySelector('.blurred-content');
    const audio = document.getElementById('background-sound');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeBox = document.getElementById('volume-box');

    if (splashScreen && blurredContent && audio) {
        audio.volume = 0.50;

        if (volumeSlider) {
            volumeSlider.value = audio.volume * 30;
        }

        splashScreen.addEventListener('click', function () {
            splashScreen.classList.add('hide-splash');
            blurredContent.classList.remove('blurred-content');

            audio.play().catch(err => {
                console.error('Audio playback failed. User interaction may be required.', err);
            });
        });
    } else {
        console.error('One or more required elements are missing.');
    }

    if (volumeSlider && volumeBox && audio) {
        volumeSlider.addEventListener('input', function () {
            const volumeValue = volumeSlider.value;
            volumeBox.textContent = `${volumeValue}%`;

            audio.volume = volumeValue / 30;

            volumeBox.classList.remove('fade-out');
            setTimeout(() => {
                volumeBox.classList.add('fade-out');
            }, 1000);
        });
    }
});
