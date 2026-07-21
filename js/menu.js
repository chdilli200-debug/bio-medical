const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuBtn.classList.toggle("active");

    if(navbar.classList.contains("active")){

        menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';

    }else{

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    }

});