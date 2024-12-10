let img = document.getElementById("gfg-img");
let preview = document.querySelector(".zoom-preview");

// Calculate the ratio by which we want to  
// magnify the image. You can increase or  
// decrease it according to your requirement 
let x = preview.offsetWidth / 100;  /* zoom +/-*/ 
let y = preview.offsetHeight / 100; /* zoom +/-*/

img.addEventListener("mousemove", (e) => {
    
    preview.style.backgroundImage = "url(" + `${img.getAttribute('src')}` + ')';
    preview.style.backgroundSize = img.width * x +
        "px " + img.height * y + "px";

    let posX = e.offsetX;
    let posY = e.offsetY;

    preview.style.backgroundPosition = "-" +
        (posX * x) * 0.8  + "px -" + (posY * y) * 0.7  + "px"; /* position*/
    preview.style.top = (posY - 80) + "px";
    preview.style.left = (posX - 80) + "px";
});

img.addEventListener('mouseover', () =>{
    preview.classList.remove('hide');
    
})
img.addEventListener("mouseout", () => {
    preview.classList.add('hide');
});