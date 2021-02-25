var btn = document.querySelector('.hamburgerIcon');
var hamMenu = document.querySelector('.hamburgerMenu');
btn.addEventListener('click', function() {
    
    if(hamMenu.style.display=='none'){
       hamMenu.style.display = 'flex';
       btn.style.background = 'gray';
    } else {
       hamMenu.style.display = 'none';
       btn.style.background = 'white';

    }

})

