// Toglogchiin eeljiig hadgalah huwisagch,negdvgeer toglogchiin 0, hoyrdugaar toglogchiig 1 gej temdegley.
var activePlayer = 1;

// Toglogchiin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];
// Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huwisagch
var roundScore = 0;
// Shooni ali talaaraa buusniig hadgalah huwisagch heregtei, 1-6 gesen utgiig ene huwisagchid sanamsargvigeer vvsgej ogno.

//Programm ehlehed beltgey
document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';
//-------------
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';
//End bolhoor dice gedeg class aar zurgiig olj bna
var diceDom = document.querySelector(".dice");
diceDom.style.display = 'none';
//Roll dice deer darhad sanamsargvigeer shoonii too garna
document.querySelector(".btn-roll").addEventListener("click", function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = 'block';
    diceDom.src = "dice-" + diceNumber + ".png";
});
