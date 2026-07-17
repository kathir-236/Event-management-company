

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

const notification = document.getElementById("notification");
const form = document.getElementById("bookingForm");

function showNotification(message) {
    if (!notification) return;
    notification.textContent = message;
    notification.classList.add("show");
    setTimeout(() => {
        notification.classList.remove("show");
    }, 3200);
}

form.addEventListener("submit", function(e){

    e.preventDefault(); // Stop page refresh

    // Close booking popup (if you have one)
    document.getElementById("bookingPopup").style.display = "none";

    // Show success popup
    document.getElementById("successPopup").style.display = "flex";

    // Show toast notification
    showNotification("Booking submitted successfully!");

    // Reset form
    form.reset();

});

function closeSuccess(){

    document.getElementById("successPopup").style.display = "none";

}

function toggleMenu(){
    document.querySelector('nav').classList.toggle('open');
}

window.addEventListener('scroll', function() {
    const topBtn = document.getElementById('topBtn');
    if (window.scrollY > 300) {
        topBtn.style.display = 'flex';
    } else {
        topBtn.style.display = 'none';
    }
});

document.getElementById('topBtn').addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

