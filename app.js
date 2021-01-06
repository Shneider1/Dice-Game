// Toglogchiin eeljiig hadgalah huwisagch,negdvgeer toglogchiin 0, hoyrdugaar toglogchiig 1 gej temdegley.
var activePlayer = 1;

// Toglogchiin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huwisagch
var roundScore = 0;

// Shooni ali talaaraa buusniig hadgalah huwisagch heregtei, 1-6 gesen utgiig ene huwisagchid sanamsargvigeer vvsgej ogno.
var dice = Math.floor(Math.random() * 6) + 1;
/* <div class="player-score" id="score-0">43</div> */

//document.querySelector('#score-0').textContent = dice;
//document.querySelector('#score-1').innerHTML = '<em>Yes!<em>';
//Programm ehlehed beltgey
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
//-------------
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
//-------------
document.querySelector(".dice").style.display = 'none';

console.log('Shoo:' + dice);