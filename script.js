function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleAccordion(header) {
  const item = header.parentElement;
  const isOpen = item.classList.contains("open");

  document.querySelectorAll(".accordion-item").forEach((otherItem) => {
    otherItem.classList.remove("open");
    otherItem.querySelector(".accordion-header").setAttribute("aria-expanded", "false");
  });

  if (!isOpen) {
    item.classList.add("open");
    header.setAttribute("aria-expanded", "true");
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let newTheme;
  if (currentTheme) {
    newTheme = currentTheme === "dark" ? "light" : "dark";
  } else {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    newTheme = systemPrefersDark ? "light" : "dark";
  }
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

// Automatically react to system theme changes if the user hasn't set an explicit preference
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  if (!localStorage.getItem("theme")) {
    document.documentElement.setAttribute("data-theme", e.matches ? "dark" : "light");
  }
});