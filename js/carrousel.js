
(function(){
    // fonction IFEE
    
    console.log('début du caroussel')
    let bouton__ouvrir = document.querySelector('.bouton__ouvrir')
    let elmCarrousel = document.querySelector('.carrousel')
    let elmBouton__x = document.querySelector('.bouton__x')
    
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerie__img = elmGalerie.querySelectorAll('img')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure')
    let elmCarrousel__form = document.querySelector('.carrousel__form') // conteneur des radios boutons 
    console.log(elmGalerie__img.length)

    let elmCarrousel__radios = []

    for(const img of elmGalerie__img){
        img.addEventListener('mousedown', function(){
                console.log('boîte modale')
                elmCarrousel.classList.add('carrousel--ouvrir')
                ajouter_carrousel()
            })
            
    }
    
    
    elmBouton__x.addEventListener('mousedown', function(){
        console.log('boîte modale')
        elmCarrousel.classList.remove('carrousel--ouvrir')
    })
    
 
    let index__precedent = 0; // Initialisez index__precedent avec 0

    function ajouter_carrousel() {
        for (const elmImg of elmGalerie__img) {
            ajouter_img(elmImg); // ajoute l'image dans le carrousel
        }
        elmCarrousel__figure.children[0].classList.add('carrousel__img--activer');
        // Mettre à jour le bouton radio sélectionné
        let index_actif = parseInt(elmCarrousel__figure.children[0].dataset.index);
        elmCarrousel__radios[index_actif].checked = true;
        index__precedent = index_actif; // Mettez à jour index__precedent avec l'index actif
    }


    
    function ajouter_img(elmImg){
        let elmCarrousel__img = document.createElement('img')
        elmCarrousel__img.setAttribute('src', elmImg.getAttribute('src'))
        elmCarrousel__img.classList.add('carrousel__img')
        elmCarrousel__img.dataset.index = index
        elmCarrousel__figure.appendChild(elmCarrousel__img)
    }
    
    let index = 0
    
    
    function ajouter_radio(index){
        let elmCarrousel__radio = document.createElement('input')
        elmCarrousel__radio.setAttribute('type', 'radio')
        elmCarrousel__radio.setAttribute('name', 'radioCarrousel')
        elmCarrousel__radio.setAttribute('id', `radioCarrousel${index}`)
        elmCarrousel__radio.dataset.index = index
        elmCarrousel__form.appendChild(elmCarrousel__radio)
        let elmLabel = document.createElement('label')
        elmLabel.setAttribute('for', `radioCarrousel${index}`)
        elmCarrousel__form.appendChild(elmLabel)
        elmCarrousel__radios.push(elmCarrousel__radio)
        elmCarrousel__radio.addEventListener('mousedown', function(){
            activer__img(this.dataset.index)
        })
    }
    
    
    for (let i = 0; i < elmGalerie__img.length; i++) {
        ajouter_radio(i) // ajoute boutons dans carouseel__form
    }

    function activer__img(index){
        if(index__precedent != -1){ 
            elmCarrousel__figure.children[index__precedent].classList.remove('carrousel__img--activer')
        }
        elmCarrousel__figure.children[index].classList.add('carrousel__img--activer')
        index__precedent = index;
        // Mettre à jour le bouton radio sélectionné
        elmCarrousel__radios[index].checked = true
    }
    
    function activer__precedent() {
        let index__nouveau = index__precedent - 1;
        if (index__nouveau < 0) {
            index__nouveau = elmGalerie__img.length - 1;
        }
        activer__img(index__nouveau);
    }

    function activer__suivant() {
        let index__nouveau = index__precedent + 1;
        if (index__nouveau >= elmGalerie__img.length) {
            index__nouveau = 0;
        }
        activer__img(index__nouveau);
    }
    
    let elmBouton__precedent = document.querySelector('.bouton__precedent');
    let elmBouton__suivant = document.querySelector('.bouton__suivant');

    elmBouton__precedent.addEventListener('click', function(){
        activer__precedent();
    });

    elmBouton__suivant.addEventListener('click', function(){
        activer__suivant();
    });

})();

