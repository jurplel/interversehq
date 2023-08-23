const navbar = document.getElementById("navbar")

// If we aren't on the main page (with GSAP), we can make opacity transition
if (!window.TweenLite) {
    navbar.classList.add("ease-out", "duration-200", "transition-opacity")
}

// dark mode switch
document.addEventListener("DOMContentLoaded", function () {
    updateDarkMode()
    // then remove opacity at load time for a subtle animation
    navbar.classList.remove("opacity-0")
})

const themeToggle = document.getElementById('theme-toggle')

function updateDarkMode() {
    let theme = localStorage.theme

    if (!theme) {
        theme = 'auto'
    }

    document.querySelector(`#theme-toggle input[value='${theme}']`).checked = true

    // set switch state
    if (theme === 'auto') {
        themeToggle.classList.remove('light')
        themeToggle.classList.remove('dark')

        // set theme variable for when we set page theme
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } else if (theme === 'light') {
        document.documentElement.classList.remove('light')
        themeToggle.classList.add('light')
    } else if (theme === 'dark') {
        themeToggle.classList.remove('light')
        themeToggle.classList.add('dark')
    }

    // set page theme
    if (theme === 'dark') {
        if (!document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.add('dark')
        }
    } else if (theme === 'light') {
        themeToggle.classList.remove('dark')
        if (!document.documentElement.classList.contains('forcedark')) {
            document.documentElement.classList.remove('dark')
            if (!document.documentElement.classList.contains('light')) {
                document.documentElement.classList.add('light')
            }
        }
    }
}

document.querySelectorAll("#theme-toggle input").forEach((t) => {
    t.addEventListener("click", (e) => {
        if (t.checked) {
            localStorage.theme = t.value
            updateDarkMode()
        }
    })
})

// mobile menu

const menu = document.getElementById("mobile-menu")
const menuButton = document.getElementById("menu-button")
const menuOpened = document.getElementById('menu-open')
const menuClosed = document.getElementById('menu-closed')

let opened = true

function toggleMobileMenu() {
    opened = !opened
    console.log(opened)
    if (opened) {
        menuOpened.classList.add('block')
        menuOpened.classList.remove('hidden')

        menuClosed.classList.add('hidden')
        menuClosed.classList.remove('block')

        menu.classList.add('opacity-100')
        menu.classList.remove('opacity-0')
    } else {
        menuClosed.classList.add('block')
        menuClosed.classList.remove('hidden')

        menuOpened.classList.add('hidden')
        menuOpened.classList.remove('block')

        menu.classList.add('opacity-0')
        menu.classList.remove('opacity-100')
    }
}

menuButton.addEventListener("click", (e) => {
    toggleMobileMenu()
})
