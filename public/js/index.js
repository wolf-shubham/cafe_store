// Automate-typing
const typed = new Typed(".typing", {
    strings: ["Espresso.", "Cappuccino.", "Iced Latte.", "Decaf.", "Iced Coffee."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


// Modal Content
const modal = document.getElementById('modal');
const span = document.getElementsByClassName("close")[0];

setTimeout(function () {
    modal.style.display = 'block';
}, 1000);

span.onclick = function () {
    modal.style.display = "none";
};