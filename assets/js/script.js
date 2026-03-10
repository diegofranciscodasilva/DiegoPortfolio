const navMenu = document.getElementById("nav_menu")
const navToggle = document.getElementById("nav_toggle")
const navClose = document.getElementById("nav_close")

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show_menu")
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show_menu")
    })
}

const navLink = document.querySelectorAll(".nav_link")
const linkAction = () => {
    const navMenu = document.getElementById("nav_menu")
    navMenu.classList.remove("show_menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

const shadowHeader = () => {
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add("shadow_header") : header.classList.remove("shadow_header")
}
window.addEventListener("scroll", shadowHeader)
