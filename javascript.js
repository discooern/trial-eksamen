var btn = document.querySelector('.hamburgerIcon');
var hamMenu = document.querySelector('.hamburgerMenu');
let isOpen = false;
btn.addEventListener('click', function() {
    
    if(!isOpen){
       btn.style.background = 'gray';
       hamMenu.style.animationName = 'hamMenu';
       hamMenu.style.right = '0px';
       isOpen = true;
    } else {
      console.log("isOpen: ", isOpen)
       hamMenu.style.animationName = 'hamMenu2';
       hamMenu.style.right = '-400px';
       btn.style.background = 'white';
       isOpen = false;
    }

})

