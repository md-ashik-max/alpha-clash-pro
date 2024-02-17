function continuePlay(){
    const alphabet = randomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText=alphabet;
    setBackgroundColorById(alphabet);

}

function play(){
    hideElementById('home');
    showElementById('play-ground');
    continuePlay();
}