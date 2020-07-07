'use strict';


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max); 
};

const randomNumber=getRandomNumber(100);

const submit=document.querySelector('.submit');
const numberIntroduced=document.querySelector('.input');
const clue=document.querySelector('.clue');
const attempt=document.querySelector('.attempt');


function renderHint( message ) {
    clue.innerHTML = message;
}

function generateHint(event){
    event.preventDefault();
    const number=parseInt(numberIntroduced.value);
    if( isNaN(number) || number === '' ){
        renderHint( `Tiene que ser un número` );
    }
    else if(number <1 || number>100){
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

let count=0;
function counting(){
    count+=1;
    attempt.innerHTML = "Número de intentos: " + count;    
}


function processingNumber(event){
    generateHint(event);
    counting();
}

submit.addEventListener('click', processingNumber);

submit.addEventListener( 'keyup', function( event ) {
    if( event.keyCode === 13 ||event.which == 13) {
        processingNumber(event);
    }
});

