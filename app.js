let list = []; 
let limit = 30;
let numSecret = generateNum();
let attempts = 1;

function showText(tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
    responsiveVoice.speak(text, 'US English Female', {rate:1.2}); 
}
function showRestart() {
    showText('h1','The secret number game');
showText('p',`Choose a number between 1 and ${limit}`);
}

showRestart();

function verificarGuess() {
    let inputElem = document.querySelector('input');
    let guessStr = inputElem.value;
    let guess = parseInt(guessStr, 10);

    if(!guessStr){
        showText('p', `Empty value, please enter a number between 1 and ${limit}`);
        return;
    }
  
    if(guess > limit){
        showText('p', `The number is too high. Please enter an integer between 1 and ${limit}`);
        cleanfield();
        return;
    }
    // validação: decimal ou negativo
    if (!/^[0-9]+$/.test(guessStr)) {
        showText('p', 'Invalid value. Please enter a positive integer');
        cleanfield();
        return;
    }

    if(guess === numSecret){
        showText('h1', 'Correct!!');
        let word = attempts > 1 ? 'attempts' : 'attempt';
        let msgattempts = `You guessed the secret number in ${attempts} ${word}!!`;
        showText('p',msgattempts);
        document.getElementById('restart').removeAttribute('disabled');
    } else {
        if(guess > numSecret){
            showText('p','The secret number is lower');
        } else {
            showText('p', 'The secret number is higher');
        }
        attempts++;
        cleanfield();
    }
}

function generateNum() {
    let numSelected = parseInt(Math.random()*limit+1);
    let quantity = list.length;

    if(quantity == limit){
        list = [];
    }
    if(list.includes(numSelected)){
        return generateNum ();
    }else {
        list.push(numSelected); 
        console.log(list);
        return numSelected;
    }
}

function cleanfield() {
    guess = document.querySelector('input');
    guess.value = '';
}

function Restartgame() {
    numSecret = generateNum();
    console.log(numSecret);
    cleanfield();
    attempts = 1;
    showRestart();
    document.getElementById('restart').setAttribute('disabled',true);
}
