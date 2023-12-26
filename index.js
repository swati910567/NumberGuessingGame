let randomNumber= Math.round((Math.random()*100+1));
const submit=document.querySelector("#subt");
const guessSlot=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const userInput=document.querySelector("#guessField");
const loworhigh=document.querySelector(".lowOrHi");
const startOver=document.querySelector(".resultParas");

const p=document.createElement('p');

let prevGuess=[];
let numGuess=2;

let playGame=true;

if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
if(isNaN(guess)){
    alert("Please enter a valid number")
}
else if(guess<1){
    alert("Please enter the number greater than or equal to 1");
}
else if(guess>100){
    alert("Please enter the number less than or equal to 100");
}
else{
    prevGuess.push(guess)
    if (numGuess===11){
        cleanGuess(guess);
        displayMessage(`Game Over, Random number was ${randomNumber}`);
        endGame();
    }
    else{
        cleanGuess(guess);
        checkGuess(guess);
    }
}
}

function checkGuess(guess){
if(guess===randomNumber){
    displayMessage(`You guessed it right :)`);
    endGame();
}
else if(guess<randomNumber){
    displayMessage(`The number is TOOO Low`);
}
else if(guess>random){
    displayMessage(`The number is TOOO High`);
}
}

function displayMessage(message){
loworhigh.innerHTML=`<h2>${message}</h2>`;
}

function cleanGuess(guess){
 userInput.value="";
 guessSlot.innerHTML+=`${guess}, `;
 numGuess++;
 remaining.innerHTML=`${12-numGuess}`;
}

function newGame(){
newGameButton=document.querySelector("#newGame");
newGameButton.addEventListener("click",function(e){
randomNumber=Math.round((Math.random()*100+1));
prevGuess=[];
newGuess=2;
guessSlot.innerHTML="";
remaining.innerHTML=`${12-newGuess}`;
userInput.removeAttribute("disabled");
startOver.removeChild(p);
displayMessage(`Let's give it an another try`);
playGame=true;
})
}

function endGame(){
userInput.value="";
userInput.setAttribute("disabled","");
p.classList.add("button");
p.innerHTML=`<h2 id="newGame">Start New GAME</h2>`;
startOver.appendChild(p);
playGame=false;
newGame();
}