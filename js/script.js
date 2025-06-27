const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

//color changes hero section scroll up down
document.addEventListener('DOMContentLoaded', function () {
  const hero = document.querySelector('.hero');

  window.addEventListener('scroll', function () {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    const hue = (scrollPercentage * 3.6) % 360;

    hero.style.backgroundImage = `linear-gradient(135deg, hsl(${hue}, 100%, 70%), hsl(${(hue + 30) % 360}, 100%, 70%))`;
  });
});

