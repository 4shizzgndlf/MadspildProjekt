const hamburgerBtn = document.querySelector(".hamburger-menu-container");
const hamburgerIcon = document.querySelector("#hamburger-menu")
const close = document.querySelector("#close");
const menu = document.querySelector(".menu");
const backdrop = document.querySelector(".backdrop");
const backgroundVideo = document.querySelector(".background-video");

hamburgerBtn.addEventListener("click", () => {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        hamburgerIcon.style.display = "flex"
        close.style.display = "none"
    } else {
        menu.style.display = 'flex';
        hamburgerIcon.style.display = "none"
        close.style.display = "flex"
    }
});
backgroundVideo.addEventListener("click", () => {
    if (menu.style.display === "flex") {
        menu.style.display = 'none';
        hamburgerIcon.style.display = "flex"
        close.style.display = "none"
    }
})
