document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (name && email && message) {
        document.getElementById("response-message").innerHTML = `<p>Дякуємо, ${name}! Ваше повідомлення було надіслано.</p>`;
    } else {
        document.getElementById("response-message").innerHTML = "<p>Будь ласка, заповніть всі поля.</p>";
    }
});
let slideIndex = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.slider-image');
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}
function moveSlide(step) {
    slideIndex += step;
    showSlide(slideIndex);
}
showSlide(slideIndex);
function initMap() {
    const location = { lat: 41.9028, lng: 12.4964 };  
    const map = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 12,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
