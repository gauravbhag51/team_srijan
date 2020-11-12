
let logo=document.querySelector(".logo")
let motto=document.querySelector(".motto")
logo.addEventListener("animationend",()=>{
    logo.style.opacity=1;
    if(rect.top<window.innerHeight*0.7)
    {
        pos=1;
        motto.style.opacity=0;
        logo.style.opacity=0;
    }
})


let pos=0;
music=new Audio("assets/rev.mpeg");
motto.addEventListener("animationend",()=>{
    about=document.querySelector(".about-us");
    logo=document.querySelector(".logo");
    motto=document.querySelector(".motto");
    rect=about.getBoundingClientRect();
    if(rect.top<window.innerHeight*0.7)
    {
        pos=1;
        motto.style.opacity=0;
        // logo.style.opacity=0;
    }
    motto.style.opacity=1;
    span=document.querySelector(".black");
    red=document.querySelector(".red");
    let intro="OUR HEARTS DON'T BEAT, THEY REV...";
    let index=0;
    let mletter="";
    let sletter="";
    let a=intro.indexOf('H');

    (function typing(){
        if(pos==1)
        {
            music.pause();
        }
        c=intro.indexOf(',');
        if(index<=c)
        {
            sletter=intro.slice(0,++index)
            span.textContent=sletter;
        }
        else
        {
            sletter=intro.slice(0,c+1)
            mletter=intro.slice(c+1,++index)
            span.textContent=sletter;
            red.textContent=mletter;
        }
        if(index==a)
        {
            music.play();
            // music.style.allow="autoplay";
            // console.log("play");
        }
    // }
    setTimeout(typing,100);
    })();
});


function parallax(element,height,speed){
    let thing=document.querySelector(element);
    thing.style.transform=`translateY(${height*speed}px)`;
}
window.addEventListener("scroll",()=>{
    parallax(".intro",window.scrollY,1);
    about=document.querySelector(".about-us");
    logo=document.querySelector(".logo");
    motto=document.querySelector(".motto");
    rect=about.getBoundingClientRect();
    if(rect.top<window.innerHeight*0.7)
    {
        
        music.pause();
        pos=1;
        motto.style.opacity=0;
    }
    if(rect.top<window.innerHeight*0.5)
    {
        logo.style.opacity=0;
    }
    if(rect.top>window.innerHeight*0.7)
    {
        
        motto.style.opacity=1;
    }
    if(rect.top>window.innerHeight*0.5)
    {
        logo.style.opacity=1;
    }
});
