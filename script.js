const music = document.getElementById("bg-music");
let musicPlayed = false;

// play music on first scroll
window.addEventListener("scroll", () => {
  if (!musicPlayed) {
    music.play().catch(err => console.log("Autoplay blocked:", err));
    musicPlayed = true;
  }
});

// fade in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-section, .fade-in, .fade-in-delay').forEach(el => observer.observe(el));
