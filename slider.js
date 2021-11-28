let index = 0;

function changeSlide(dir) {
    index += dir;
    let slides = document.getElementsByClassName("slide");
    
    //Iterating through slides and changing them to not visible
    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    //Edge cases to allow endless loop 
    if(index > slides.length - 1) {
        index = 0;
    }

    if(index < 0) {
        index = slides.length - 1;
    }

    slides[index].style.display = "block";
}