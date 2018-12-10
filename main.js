tabCartes1 = ["images/PNG/ace_of_diamonds.png", "images/PNG/2_of_diamonds.png", "images/PNG/3_of_diamonds.png", "images/PNG/4_of_diamonds.png", "images/PNG/5_of_diamonds.png", "images/PNG/6_of_diamonds.png", "images/PNG/7_of_diamonds.png", "images/PNG/8_of_diamonds.png", "images/PNG/9_of_diamonds.png", "images/PNG/10_of_diamonds.png"];
tabCartes2 = ["images/PNG/ace_of_spades.png", "images/PNG/2_of_spades.png", "images/PNG/3_of_spades.png", "images/PNG/4_of_spades.png", "images/PNG/5_of_spades.png", "images/PNG/6_of_spades.png", "images/PNG/7_of_spades.png", "images/PNG/8_of_spades.png", "images/PNG/9_of_spades.png", "images/PNG/10_of_spades.png"];

selectCarteJ1 = document.querySelector("#cardP1-1");
setCarteJ1 = document.querySelector("#carte-img-j1");

selectCarteJ2 = document.querySelector("#cardP2-1");
setCarteJ2 = document.querySelector("#carte-img-j2");

cartesJ1 = document.querySelector(".container-j1").getElementsByTagName("div");
cartesJ2 = document.querySelector(".container-j2").getElementsByTagName("div");

scoreA = document.querySelector("#score1-input");
scoreB = document.querySelector("#score2-input");



/* let rand = [];
let rand2 = [];
    


for (i = 0; i < 5; i++) {
    rand[i] = tabCartes1[Math.floor((Math.random() * (tabCartes1.length) - 1) + 1)];
    rand2[i] = tabCartes2[Math.floor((Math.random() * (tabCartes2.length) - 1) + 1)];
    
    cartesJ1[i].innerHTML = `<img src=${rand[i]} alt="unavailable" / >`;
    cartesJ1[i].value = `${rand[i]}`;
    
    cartesJ2[i].innerHTML = `<img src=${rand2[i]} alt="unavailable" / >`;
    cartesJ2[i].value = `${rand2[i]}`;

}

let attribution1 = () => {
    setCarteJ1.src = `${selectCarteJ1.value}`;
    this;
}
let attribution2 = () => {
    setCarteJ2.src = `${selectCarteJ2.value}`;
    this;
} */

/* selectCarteJ1.addEventListener('click', attribution1);
selectCarteJ2.addEventListener('click', attribution2); */


let deck10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let deckj1 = [];
let deckj2 = [];

let deckShuffle = [];

let melange = () => {
    // Solution :
    // 1.We put each element in the array in an object, and give it a random sort key
    // 2.We sort using the random key
    // 3.We unmap to get the original objects 

    deckShuffle = deck10
        .map((a) => ({
            sort: Math.random(),
            value: a
        }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)

    /*  console.log(deckShuffle); */
    return deckShuffle;
}

let distribution = () => {
    i = deckShuffle.length-1;
    while (i > 0) {
        if (i>=0){
        deckj1.push(deckShuffle[i]);
        i--;
        }
        /* console.log(i); */
        if (i>=0){
        deckj2.push(deckShuffle[i]);
        i--;}
        /* console.log(i); */
    }
}
console.log(deckj1);
console.log(deckj2);
let fight = document.getElementById("combat");
pointsJ1 =0;
pointsJ2 =0;
let clickBattle = () => {
    for (i=0; i<deckj1.length;i++){
        if (deckj1[i] > deckj2[i]){
        pointsJ1++;
        
        } else if(deckj1[i] < deckj2[i]){
            pointsJ2++;
        } else if(deckj1[i] === deckj2[i]){
            pointsJ1+=0;
            pointsJ2+=0;
        }
    }
    return console.log(pointsJ1),
    console.log(pointsJ2);
}

/* console.log(pointsJ1);
console.log(pointsJ2); */



melange();
distribution();
fight.addEventListener("click", clickBattle);
