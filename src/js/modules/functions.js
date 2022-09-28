export function isWebp() {    
    function testWebP(callback) {

        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        
        testWebP(function (support) {
        
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

/************************* Head Burger **********************/

export function headBurger() {    
    window.addEventListener("load", burger);
  
  const headerBurger = document.querySelector('.header__burger');
  const headerMenu = document.querySelector('.header__menu');
  const body = document.querySelector('body');
  function burger() {
    headerBurger.addEventListener("click", function (e) {
        headerBurger.classList.toggle("active");
        headerMenu.classList.toggle("active");
        body.classList.toggle("lock");
    });
  }    
  }
  
  headBurger();