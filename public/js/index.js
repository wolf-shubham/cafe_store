var typed = new Typed(".typing", {
    strings: ["Espresso.", "Cappuccino.", "Iced Latte.", "Decaf.", "Iced Coffee."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Modal Content
var modal = document.getElementById('modal');
var span = document.getElementsByClassName("close")[0];

setTimeout(function () {
    modal.style.display = 'block';
}, 3000);

span.onclick = function () {
    modal.style.display = "none";
};