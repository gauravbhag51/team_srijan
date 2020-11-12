window.addEventListener("load",()=>{   
    body=document.querySelector(".body");
    body.style.opacity=1;
    loader=document.querySelector(".preloader");
    loader.classList.add("fadeOut");
    body.classList.remove("fadeOut");
});