const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let intervalId;
let countdownId;
let timeLeft = 60;

const randomLetter = () => {
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
};

const startCountdown = () => {
    document.getElementById('timer').textContent = timeLeft; 
    countdownId = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(countdownId);
        }
    }, 1000); 
};

document.getElementById('startButton').addEventListener('click', () => {
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;
    document.getElementById('restartButton').disabled = true;

    intervalId = setInterval(() => {
        document.getElementById('randomLetter').textContent = randomLetter();
    }, 100); 
});

document.getElementById('stopButton').addEventListener('click', () => {
    clearInterval(intervalId); 
    clearInterval(countdownId); 
    document.getElementById('startButton').disabled = false;
    document.getElementById('stopButton').disabled = true;
    document.getElementById('restartButton').disabled = false; 
    
    timeLeft = 60; 
    startCountdown(); 
});

document.getElementById('restartButton').addEventListener('click', () => {
    clearInterval(intervalId); 
    clearInterval(countdownId);

    document.getElementById('randomLetter').textContent = 'Letra';
    document.getElementById('timer').textContent = '60';
    timeLeft = 60; 
    document.getElementById('startButton').disabled = false;
    document.getElementById('stopButton').disabled = true;
    document.getElementById('restartButton').disabled = true;
});