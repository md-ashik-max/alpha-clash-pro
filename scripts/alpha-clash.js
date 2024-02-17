function continuePlay(){
    const letter = randomAlphabet();
    console.log(letter);
}

function play(){
    hideElementById('home');
    showElementById('play-ground');
}