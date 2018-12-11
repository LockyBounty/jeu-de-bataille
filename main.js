tabCartes1 = ["images/PNG/ace_of_diamonds.png", "images/PNG/2_of_diamonds.png", "images/PNG/3_of_diamonds.png", "images/PNG/4_of_diamonds.png", "images/PNG/5_of_diamonds.png", "images/PNG/6_of_diamonds.png", "images/PNG/7_of_diamonds.png", "images/PNG/8_of_diamonds.png", "images/PNG/9_of_diamonds.png", "images/PNG/10_of_diamonds.png"];
tabCartes2 = ["images/PNG/ace_of_spades.png", "images/PNG/2_of_spades.png", "images/PNG/3_of_spades.png", "images/PNG/4_of_spades.png", "images/PNG/5_of_spades.png", "images/PNG/6_of_spades.png", "images/PNG/7_of_spades.png", "images/PNG/8_of_spades.png", "images/PNG/9_of_spades.png", "images/PNG/10_of_spades.png"];

selectCarteJ1 = document.querySelector("#cardP1-1");
setCarteJ1 = document.querySelector("#carte-img-j1");

selectCarteJ2 = document.querySelector("#cardP2-1");
setCarteJ2 = document.querySelector("#carte-img-j2");

let cartesJ1 = document.querySelector(".container-j1");
let cartesJ2 = document.querySelector(".container-j2").getElementsByTagName("div");

scoreA = document.querySelector(".score1-input");
scoreB = document.querySelector(".score2-input");

let defaultImgCenter = "images/Mechanic+Deck.gif";


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
    i = deckShuffle.length - 1;
    deckj1 = [];
    deckj2 = [];
    while (i > 0) {

        if (i >= 0) {
            deckj1.push(deckShuffle[i]);
            document.querySelector(`#cardP1-${deckj1.length-1}`).innerHTML = `<img src="${tabCartes1[deckShuffle[i]-1]}" name="${deckShuffle[i]}">`;
            //<--tabCartes1[deckShuffle[i]-1]} pour lier le numero du tableau & a l'image du tablau 2
            i--;
        }
        /* console.log(i); */
        if (i >= 0) {
            deckj2.push(deckShuffle[i]);
            document.querySelector(`#cardP2-${deckj2.length-1}`).innerHTML = `<img src="${tabCartes2[deckShuffle[i]-1]}" value="${deckShuffle[i]}">`;
            i--;
        }
        /* console.log(i); */
    }

}
console.log(deckj1);
console.log(deckj2);
let fight = document.getElementById("combat");
let distrib = document.querySelector("#distrib1");
let shuffling = document.querySelector("#melange1");
let reseter = document.querySelector("#reset1");
pointsJ1 = 0;
pointsJ2 = 0;


let counterClickBattle = 0;
let clickBattle = () => {
    luck1.removeAttribute("src"); /*Enleve le src de l'event.target */
    // console.log(luck1);
    if (counterClickBattle === 0) {
        for (i = 0; i < deckj1.length; i++) {

            console.log(`${deckj1[i]} contre ${deckj2[i]}  `);

            if (deckj1[i] > deckj2[i]) {
                pointsJ1++;

            } else if (deckj1[i] < deckj2[i]) {
                pointsJ2++;
            } else if (deckj1[i] === deckj2[i]) {
                pointsJ1 += 0;
                pointsJ2 += 0;
            }
        }

        scoreA.innerHTML = pointsJ1;
        scoreB.innerHTML = pointsJ2;
        // console.log(`Joueur 1 : ${ pointsJ1} points \nJoueur 2 : ${pointsJ2} points`);
        counterClickBattle++;
    }
}


let resetAll = () => {
    pointsJ1 = 0;
    pointsJ2 = 0;
    counterClickBattle = 0;

    scoreA.innerHTML = pointsJ1;
    scoreB.innerHTML = pointsJ2;
    for (i = deckj1.length - 1; i >= 0; i--) {
        document.querySelector(`#cardP1-${i}`).innerHTML = ` `;
        document.querySelector(`#cardP2-${i}`).innerHTML = ` `;
        // console.log(i);
        setCarteJ1.src = `${defaultImgCenter}`; /*Remet l'image original */
        setCarteJ2.src = `${defaultImgCenter}`; /*Remet l'image original */
    }
}



// melange();
// distribution();
fight.addEventListener("click", clickBattle);
distrib.addEventListener("click", distribution);
shuffling.addEventListener("click", melange);
reseter.addEventListener("click", resetAll);

// function trigger1(event) { 
//     let luck = event.target;
//     console.log( "Triggered by a " + luck.tagName + " element"+ "\nMacron, enculé !");
// }
let luck1;
function triggerJoueur(event) {
    //<-- on travaille avec "event" (mais ça pourrait etre autre chose)
    luck1 = event.target;
    console.log(event.target.src);
    console.log(event.target.name);
    let temp = event.target.src;

    if (temp !== undefined) {
        setCarteJ1.src = `${temp}`; 
        //<--- Va prendre le src de l'image où on a cliqué et la place dans l'endroit voulu
    }

}

cartesJ1.addEventListener("click", triggerJoueur);