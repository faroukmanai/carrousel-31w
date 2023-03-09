(function(){
// fonction IFEE

console.log('début du caroussel')
let bouton__ouvrir = document.querySelector('.bouton__ouvrir')
let elmCarrousel = document.querySelector(".carrousel")
let elmCarrousel__x = document.querySelector(".carrousel__x")
console.log(bouton__ouvrir.tagName)
bouton__ouvrir.addEventListener('mousedown',function(){
    console.log('boite modale')
    elmCarrousel.classList.add("carrousel--ouvrir");
})
elmCarrousel__x.addEventListener('mousedown',function(){
    elmCarrousel.classList.remove("carrousel--ouvrir");
})
})()