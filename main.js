tabCartes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

cartesJ1 = document.querySelector(".container-j1").getElementsByTagName("div");


for (i = 0; i < 5; i++) {
    let rand = tabCartes[Math.floor((Math.random() * (tabCartes.length) - 1) + 1)];
    
        if (cartesJ1[i] !== rand) {
            cartesJ1[i].innerHTML = `${rand}`;
        
    }

}