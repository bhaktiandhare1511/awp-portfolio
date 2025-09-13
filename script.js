document.addEventListener("DOMContentLoaded", () => {
  // Add fade-in
  document.body.classList.add("fade-in");

  // Active nav & page transitions
  const links = document.querySelectorAll("nav ul li a");
  links.forEach(link => {
    if(link.href === window.location.href){
      link.classList.add("active");
    }

    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.currentTarget.href;
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  });

  // Dark/light mode toggle
  const toggle = document.getElementById("darkModeToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
});
