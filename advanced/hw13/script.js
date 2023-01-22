const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const allImages = [...document.querySelectorAll('img')];

let currentPhoto = 0;

const switchImage = () => {
    for (i = 0; i < allImages.length; i++) {
        allImages[i].classList.add('hidden');
    }

    allImages[currentPhoto].classList.remove('hidden');
};
switchImage();

const switchPrevImage = () => {
    if (currentPhoto - 1 === -1) {
        currentPhoto = allImages.length - 1;
    } else {
        currentPhoto--;
    };

    switchImage();
};

const switchNextImage = (image) => {
    if (currentPhoto + 1 === allImages.length) {
        currentPhoto = 0;
    } else {
        currentPhoto++;
    };

    switchImage();
};

const prevImage = prevButton.addEventListener('click', switchPrevImage);
const nextImage = nextButton.addEventListener('click', switchNextImage);