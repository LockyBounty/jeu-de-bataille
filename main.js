tabCartes1 = ["images/PNG/ace_of_diamonds.png", "images/PNG/2_of_diamonds.png", "images/PNG/3_of_diamonds.png", "images/PNG/4_of_diamonds.png", "images/PNG/5_of_diamonds.png", "images/PNG/6_of_diamonds.png", "images/PNG/7_of_diamonds.png", "images/PNG/8_of_diamonds.png", "images/PNG/9_of_diamonds.png", "images/PNG/10_of_diamonds.png"];
tabCartes2 = ["images/PNG/ace_of_spades.png", "images/PNG/2_of_spades.png", "images/PNG/3_of_spades.png", "images/PNG/4_of_spades.png", "images/PNG/5_of_spades.png", "images/PNG/6_of_spades.png", "images/PNG/7_of_spades.png", "images/PNG/8_of_spades.png", "images/PNG/9_of_spades.png", "images/PNG/10_of_spades.png"];

selectCarteJ1 = document.querySelector(".container-j1").getElementsByTagName("div");
setCarteJ1 = document.querySelector("#carte-img-j1");

cartesJ1 = document.querySelector(".container-j1").getElementsByTagName("div");
cartesJ2 = document.querySelector(".container-j2").getElementsByTagName("div");

let rand = [];
let rand2 = [];
    


for (i = 0; i < 5; i++) {
    rand[i] = tabCartes1[Math.floor((Math.random() * (tabCartes1.length) - 1) + 1)];
    rand2[i] = tabCartes2[Math.floor((Math.random() * (tabCartes2.length) - 1) + 1)];
    
    cartesJ1[i].innerHTML = `<img src=${rand[i]} alt="unavailable" / >`;
    cartesJ1[i].value = `${rand[i]}`;
    
    cartesJ2[i].innerHTML = `<img src=${rand2[i]} alt="unavailable" / >`;


}

let attribution = () => {
    setCarteJ1.src = `${selectCarteJ1.value}`;
}


selectCarteJ1.addEventListener("click", attribution )