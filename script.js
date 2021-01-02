document.documentElement.setAttribute('theme-mode', 'light')

const toggle = document.querySelector('.theme-toggle input[type="checkbox"]');

function toggleTheme(element) {
    if (element.target.checked) {
        document.documentElement.setAttribute('theme-mode', 'dark');
    } else {
        document.documentElement.setAttribute('theme-mode', 'light');
    }
}

toggle.addEventListener('change', toggleTheme, false);