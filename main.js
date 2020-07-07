'use strict';

//random number, take it as it is....
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max); 
};

const randomNumber=getRandomNumber(100);

const submit=document.querySelector('.submit');
const numberIntroduced=document.querySelector('.input');
const clue=document.querySelector('.clue');
const attempt=document.querySelector('.attempt');

function renderHint( message ) { //microfunction redering clue.inneHTML, slightly useless
    clue.innerHTML = message;
}
//main function painting clues

function generateHint(event){
    event.preventDefault();
    const number=parseInt(numberIntroduced.value);
    if( isNaN(number) || number === '' || number <1 || number>100){
        renderHint( `El número debe estar entre 1 y 100.` );
    }
    else if (number < randomNumber){
        renderHint( `Demasiado bajo` );
    }
    else if(number  > randomNumber){
        renderHint( `Demasiado alto` );
    }
    else {
        renderHint( `Has ganado campeona!!!` );
    }
    
};
//function for counting, remember the variable needs to be a let and not a const or it won't work.
let count=0;
function counting(){
    count+=1;
    attempt.innerHTML = "Número de intentos: " + count;    
}

//the olf getTogether function
function processingNumber(event){
    generateHint(event);
    counting();
}

submit.addEventListener('click', processingNumber);

