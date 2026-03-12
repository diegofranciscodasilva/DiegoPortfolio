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

const contactForm = document.getElementById("contact-form")
const contactMessage = document.getElementById("contact-message")
const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_8yvwsoh", "template_bf8sk0p", "#contact-form", "090hj4xBN59VEhOvj")
        .then(() => {
            contactMessage.textContent = "Mensagem enviada com sucesso 💾"
            setTimeout(() => {
                contactMessage.textContent = ""
            }, 5000)
            contactForm.reset()
        }, () => {
            contactMessage.textContent = "A mensagem não foi enviada (service error) 🛠️"
        })
}
contactForm.addEventListener("submit", sendEmail)

const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up")
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

const sections = document.querySelectorAll("section[id]")
const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 72,//58
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(".nav_menu a[href*=" + sectionId + "]")

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link")
        } else {
            sectionsClass.classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll", scrollActive)

const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "ri-sun-line"

const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line"

if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme)
}
themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem("selected-theme", getCurrentTheme())
    localStorage.setItem("selected-icon", getCurrentIcon())
})

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    // reset: true // animation repeat
})

sr.reveal(`.home_perfil, .about_image, .contact_mail`, { origin: "right" })
sr.reveal(`.home_name, .home_info, .about_container .section_title-1, .about_info, .contact_social, .contact_data`, { origin: "left" })
sr.reveal(`.services_card, .projects_card`, { interval: 100 })
