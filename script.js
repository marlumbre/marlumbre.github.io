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