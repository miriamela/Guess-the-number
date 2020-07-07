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


// //correction

// function getRandomNumber(max) {
//     return Math.ceil(Math.random() * max);
    
// };

// const randomNumber=getRandomNumber(100);

// console.log(randomNumber)
// // first 
// const submit=document.querySelector('.submit');

// function hope(){
//     console.log(`me han clicado`)

//     if(numberIntroduced.value< 1 ||numberIntroduced.value >100){ //condición más estricta, la pones al principio y la condición era esa no la tercera que pusiste tu.
//         clue.innerHTML=`Pista: El número debe estar
//         entre 1 y 100.`
//     }
//     else if (numberIntroduced.value < randomNumber){
//         console.log(`es menor`);
//         clue.innerHTML= `Pista: Demasiado bajo`
//     }
//     else if(numberIntroduced.value > randomNumber){
//         console.log(`es menor`);
//         clue.innerHTML= `Pista: Demasiado alto`
//     }
//     else if( parceInt(numberIntroduced.value) === randomNumber){ //con el triple = solo no funciona, o doble == o parceInt al numberIntroduced.value (o Number donde mantine los decimales, con parceInt te lo pasa a numero intero) porque viene del HTML como string y no como numero
//         console.log(`no me entero de lo que pasa`)
//         clue.innerHTML=`Has ganado campeona!!!`
//     }
//    // else if( numberIntroduced.value === isNaN || numberIntroduced === ''){ 
//         // clue.value=`El número debe estar
//         // entre 1 y 100.`
//     //} ESO TODO ES INCORRECTO
// }
//  // MOSTRAR INTENTOS

//  //incrementar un numero en HTML, cada vez que hacemos click

//  function counting(){
//     parceInt(attempt.innerHTML)+1
      
// }
// //OR

// let count=0
// function counting(){
//     count= count+1
//     attempt.innerHTML= count;
// }

// //function conjunta
// function together(ev){
//     ev.preventDefault()
//     hope()
//     counting()

// }

// submit.addEventListener('click', together);