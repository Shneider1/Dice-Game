// Toglogchiin eeljiig hadgalah huwisagch,negdvgeer toglogchiin 0, hoyrdugaar toglogchiig 1 gej temdegley.
var activePlayer = 0;

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
//Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function(){
    // 1 - 6 hvrtel sanamsargvi neg too gragaj awna
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // Shooni zurgiig web deer gargaj irne
    diceDom.style.display = 'block';
    // Buusan sanamsargvi toond hargalzah shooni zurgiig web deer gargaj irne
    diceDom.src = "dice-" + diceNumber + ".png";
    //Buusan too ni 1 ees yalgaatai bol active Toglogchiin eeljin onoog nemegdvvlne
    if(diceNumber !== 1){
        // 1 ees yalgaatai too buulaa.Buusan toog toglogchid nemj ogno.
         roundScore = roundScore + diceNumber;
         document.getElementById("current-" + activePlayer).textContent = roundScore;
    }
    else{
        // 1 buusan tul toglogchiin eeljiig ene hesegt solij ogno.
        //Ene toglogchiin eeljiindee tsugluulsan onoog 0 bolgono.
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;
        //Toglogchiin eeljiig nogoo toglogchruu shiljvvlne.
        //Herew idewhtei toglogch ni 0 baiwal idewhtei toglogchiig 1 bolgo.
        //Ugui bol idewhtei toglogchiig 0 bolgo.
        //Gurwalsan operator nohtsol shalgah
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        //Ulaan tsegiig shiljvvleh
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

 
        diceDom.style.display = 'none';
        /*
        if(activePlayer === 0){
            activePlayer = 1;
        }
        else{
            activePlayer = 0;
        }
        */ 
    }

});
