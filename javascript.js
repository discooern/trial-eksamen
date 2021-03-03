var btn = document.querySelector('.hamburgerIcon');
var hamMenu = document.querySelector('.hamburgerMenu');
let isOpen = false;

btn.addEventListener('click', function() { 
   let hamMenuWidth = window.getComputedStyle(hamMenu).width;
   
    if(!isOpen){
      btn.style.background = 'gray';
      hamMenu.style.transform = "translateX(0)";
      isOpen = true;
    } else {
      btn.style.background = 'white';
      hamMenu.style.transform = `translateX(${hamMenuWidth})`
      isOpen = false;
      console.log(hamMenuWidth)
    }
})

