'use strict';


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    
};

const randomNumber=getRandomNumber(100);

const submit=document.querySelector('.submit');
const numberIntroduced=document.querySelector('.input');
const clue=document.querySelector('.clue');
const attempt=document.querySelector('.attempt');

function hope(){
    
    if (numberIntroduced.value < randomNumber){
        clue.value= `Demasiado bajo`
    }
    else if(numberIntroduced.value > randomNumber){
        clue.value= `Demasiado alto`
    }
    else if( numberIntroduced.value === randomNumber){
        clue.value=`Has ganado campeona!!!`
    }
    else if( numberIntroduced.value === isNaN || numberIntroduced === ''){
         clue.value=`El número debe estar
         entre 1 y 100.`
    }
    event.preventDefault()
};

function counting(){
    const count=0;
    const counting=count+=1;
    attempt.value= counting;
    
    console.log
    
}


function together(){
    hope()
    counting()

}

submit.addEventListener('click', together);
