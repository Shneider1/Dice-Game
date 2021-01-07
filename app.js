//TOgloomiin bvh gazart ashiglagdah global huwisagchiig end zarlay
//Togloom duussan esehiig hadgalah tolwiin huwisagch
var isOverGame;
//Ali toglogch shoo shidew ew gedgiig end hadgalna.
var activePlayer;
//Hoyr toglogchiin tsugluulsan onoonuud
var scores;
//Idewhtei toglogchiin tsugluulj baigaa eeljiin onoo
var roundScore;

//Shoonii zurgiig vzvvleh elementiig DOM oos haij olood end hadgalay.
//End bolhoor dice gedeg class aar zurgiig olj bna
var diceDom = document.querySelector(".dice");

//Togloomiig ehlvvlne 
initGame();

//Togloomiig shineer ehlehed beltgene.
function initGame(){
    // Togloom ehellee gedeg tolowt oruulna
    isOverGame = false;
    // Toglogchiin eeljiig hadgalah huwisagch,negdvgeer toglogchiin 0, hoyrdugaar toglogchiig 1 gej temdegley.
    activePlayer = 0;
    
    // Toglogchiin tsugluulsan onoog hadgalah huwisagch
    scores = [0, 0];
    // Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huwisagch
    roundScore = 0;
    //Programm ehlehed beltgey
    document.getElementById("score-0").textContent = '0';
    document.getElementById("score-1").textContent = '0';
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';

    //Toglogchdiin neriig butsaaj gargah
    document.getElementById("name-0").textContent = 'Player 1';
    document.getElementById("name-1").textContent = 'Player 2';

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");

    diceDom.style.display = 'none';
    }
//Roll Dice - Shoo shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function(){
    //Herwee toglogch todorson bol Roll Dice Listener ymarch uildel hiihgui
    if(isOverGame !== true){
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
        switchToNextPlayer();
        diceDom.style.display = 'block';
    }
    }else{
        alert("Togloom duussan bna. New Game deer darj shineer ehlene vv");
    }
});
// Hold towchnii event lisntener
document.querySelector(".btn-hold").addEventListener("click", function(){
    //Herwee yalagch todorson bol hold listener ymarch uildel hiihgui 
    if(isOverGame !== true){
// Ug togllogchiin tsugluulsan eeljnii onoog global onoon deer ni nemj ogno.
scores[activePlayer] = scores[activePlayer] + roundScore;

//delgets deer onoog ni oorchilno.
document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

//Ug toglogch hojson esehiig (onoo ni 100 aas ih eseh) shalgah
if(scores[activePlayer] >= 100) {
    //Togloomig dussan tolowt oruulna 
    isOverGame = true;
    //Yalagch gesen text iig nerniih ni orond garna
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    //winner iig html code dotorh hargalzah class ni d oruulj bna
    document.querySelector(".player-"+ activePlayer +"-panel").classList.add("winner");
    //Yalagch todorson active iig hargalzah class aas hasj bna
    document.querySelector(".player-"+ activePlayer +"-panel").classList.remove("active");
}else{
    //Toglogchiin eeljiig solih
    switchToNextPlayer();
}
    }else{
        alert("Togloom duussan bna. New Game deer darj shineer ehlene vv");
    }
})
//Ene Function ni togloh eeljiig daraachiin toglogchruu shiljvvldeg.
function switchToNextPlayer() {
//Ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono
roundScore = 0;
document.getElementById("current-" + activePlayer).textContent = 0;
//Toglogchiin eeljiig nogoo toglogchruu shiljvvlne.
//Gurwalsan operator nohtsol shalgah
activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
//Ulaan tsegiig shiljvvleh
document.querySelector(".player-0-panel").classList.toggle("active");
document.querySelector(".player-1-panel").classList.toggle("active");
//shoog tvr alga bolgono
diceDom.style.display = 'none';
}
//New game buyu Shine togloom ehlvvleh towchnii event listener
document.querySelector(".btn-new").addEventListener("click", initGame);