

const images=[

"image/01.jpeg",
"image/02.jpeg",
"image/03.jpeg",
"image/04.jpeg",
"image/05.jpeg"

];

let index=0;

const slider=document.getElementById("heroSlider");

setInterval(()=>{

index++;

if(index>=images.length){

index=0;

}

slider.style.opacity="0";

setTimeout(()=>{

slider.src=images[index];

slider.style.opacity="1";

},500);

},3000);


function openBooking(){

document.getElementById("bookingPopup").style.display="flex";

}

function closeBooking(){

document.getElementById("bookingPopup").style.display="none";

}

window.onclick=function(e){

const popup=document.getElementById("bookingPopup");

if(e.target==popup){

popup.style.display="none";

}

}

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e){

    e.preventDefault(); // Stop page refresh

    // Close booking popup (if you have one)
    document.getElementById("bookingPopup").style.display = "none";

    // Show success popup
    document.getElementById("successPopup").style.display = "flex";

    // Reset form
    form.reset();

});

function closeSuccess(){

    document.getElementById("successPopup").style.display = "none";

}

