const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const timer = document.getElementById('timer');

// console.log(startButton, pauseButton, timer);

let timeout = Number(prompt('Enter your number of seconds'));
let intevalID = null;
let isActive = false;

if (!timeout) {
    alert('You have not entered the number of seconds!');
}

const formatTime = (timeItem) => {
    return String(timeItem).length < 2 ? `0${timeItem}` : timeItem;
};

const renderTime = ({hours, minutes, seconds}) => {
    const timerValue = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    timer.innerText = timerValue;

    // console.log(timer);
};

const timeLeft = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);

    return {hours, minutes, seconds};
};

const startTimer = (userTime) => {
    isActive = true;
    userTime = timeLeft(timeout);
    renderTime(userTime);

    return new Promise((resolve) => {
        intervalID = setInterval(() => {
            timeout--;

            if (timeout <= 0) {
                isActive = false;
                clearInterval(intervalID);
                intervalID = null;
                resolve();
            }

            userTime = timeLeft(timeout);
            renderTime(userTime);
        }, 1000)
    })
};

const stopTimer = () => {
    isActive = false;
    intervalID = null;
    clearInterval(intervalID);
};

startButton.addEventListener('click', () => {
    if (!timeout || isActive) {
        return;
    };

    startTimer(timeout)
        .then(() => {
            console.log('Timer end!')   
    });
});

pauseButton.addEventListener('click', stopTimer);