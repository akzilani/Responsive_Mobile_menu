const navTogger = document.querySelector(".nav-toggle");
navTogger.addEventListener("click", navToggo);

function navToggo(){

     const nav = document.querySelector("nav");
     nav.classList.toggle("open");
     if(nav.classList.contains("open") ){
         nav.style.maxHeight = nav.scrollHeight + "px";
     }else{
         nav.removeAttribute("style")
     }
}