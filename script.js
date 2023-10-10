let display = document.getElementById('display');

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}
let isDarkTheme = false;

function toggleTheme() {
    const body = document.body;
    isDarkTheme = !isDarkTheme;
    body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
}
