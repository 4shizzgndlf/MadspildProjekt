const hamburgerBtn = document.querySelector(".hamburger-menu-container");
const hamburgerIcon = document.querySelector("#hamburger-menu");
const closeIcon = document.querySelector("#close");
const menu = document.querySelector(".menu");

hamburgerBtn.addEventListener("click", () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        hamburgerIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        hamburgerIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
});
