tabCartes = [1,2,3,4,5,6,7,8,9,10];

cartesJ1 = document.querySelectorAll(".container-j1").length;

cartesJ1.innerHTML= `${tabCartes[Math.floor((Math.random() * (tabCartes.length)-1)+1)]}`;
