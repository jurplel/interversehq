document.addEventListener("DOMContentLoaded", function () {
    updateDarkMode()
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
        document.documentElement.classList.remove('dark')
        themeToggle.classList.remove('dark')
        if (!document.documentElement.classList.contains('light')) {
            document.documentElement.classList.add('light')
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
