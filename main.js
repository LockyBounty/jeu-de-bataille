tabCartes1 = ["images/PNG/ace_of_diamonds.png", "images/PNG/2_of_diamonds.png", "images/PNG/3_of_diamonds.png", "images/PNG/4_of_diamonds.png", "images/PNG/5_of_diamonds.png", "images/PNG/6_of_diamonds.png", "images/PNG/7_of_diamonds.png", "images/PNG/8_of_diamonds.png", "images/PNG/9_of_diamonds.png", "images/PNG/10_of_diamonds.png"];
tabCartes2 = ["images/PNG/ace_of_spades.png", "images/PNG/2_of_spades.png", "images/PNG/3_of_spades.png", "images/PNG/4_of_spades.png", "images/PNG/5_of_spades.png", "images/PNG/6_of_spades.png", "images/PNG/7_of_spades.png", "images/PNG/8_of_spades.png", "images/PNG/9_of_spades.png", "images/PNG/10_of_spades.png"];



cartesJ1 = document.querySelector(".container-j1").getElementsByTagName("div");
cartesJ2 = document.querySelector(".container-j2").getElementsByTagName("div");

for (i = 0; i < 5; i++) {
    let rand = tabCartes1[Math.floor((Math.random() * (tabCartes1.length) - 1) + 1)];
    console.log(rand);
    let rand2 = tabCartes2[Math.floor((Math.random() * (tabCartes2.length) - 1) + 1)];
    
    cartesJ1[i].innerHTML = `<img src=${rand} alt="unavailable" / >`;
    cartesJ2[i].innerHTML = `<img src=${rand2} alt="unavailable" / >`;


}