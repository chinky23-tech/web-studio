const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});