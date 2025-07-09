console.log("Welcome to Sunil's portfolio website!");

// Smooth skill bar animation
window.addEventListener("scroll", () => {
  const bars = document.querySelectorAll(".bar");
  const trigger = document.querySelector(".skills").getBoundingClientRect().top;
  if (trigger < window.innerHeight) {
    bars.forEach(bar => bar.style.width = bar.classList.contains("python") ? "90%" :
                                 bar.classList.contains("js") ? "80%" :
                                 bar.classList.contains("flutter") ? "70%" : "0");
  }
});

// Toggle project description
function toggleDetails(element) {
  const detail = element.nextElementSibling;
  detail.style.display = detail.style.display === "block" ? "none" : "block";
  element.textContent = element.textContent.includes("⯆")
    ? element.textContent.replace("⯆", "⯅")
    : element.textContent.replace("⯅", "⯆");
}

// Back to top button
const backToTop = document.getElementById("backToTop");
window.onscroll = function () {
  backToTop.style.display = window.scrollY > 200 ? "block" : "none";
};
backToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Dark mode toggle
const toggleTheme = document.getElementById("toggle-theme");
toggleTheme.onclick = () => {
  document.body.classList.toggle("dark");
  toggleTheme.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
};

// Typing effect for name
const typedText = document.getElementById("typed-text");
const phrases = ["Sunil S", "Full Stack Developer", "ML Enthusiast", "Python Coder"];
let i = 0, j = 0, isDeleting = false;

function type() {
  let current = phrases[i];
  if (isDeleting) {
    typedText.textContent = current.slice(0, j--);
  } else {
    typedText.textContent = current.slice(0, ++j);
  }

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();
