
    window.addEventListener("scroll",()=>{
        var headings=document.querySelectorAll(".gallery");
    headings.forEach(heading=>{
        text=heading.getBoundingClientRect().top;
        bottom=heading.getBoundingClientRect().bottom;
        var screenPosition=window.innerHeight/1.5;
        if(text<screenPosition)
        {
            heading.classList.add("appear");
        }
        if(text>=screenPosition||bottom<window.innerHeight/3)
        {
            heading.classList.remove("appear");
            heading.classList.add("disappear");
        }
    });
    });



    