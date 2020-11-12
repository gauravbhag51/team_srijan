function parallax(element,height,speed){
    let thing=document.querySelector(element);
    thing.style.transform=`translateY(${height*speed}px)`;
}
window.addEventListener("scroll",()=>{
    parallax(".intro",window.scrollY,1);
});
$('.carousel').carousel({
    interval: 2500
  })