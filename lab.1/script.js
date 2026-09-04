let count = 0;

const button = document.getElementById('myButton');
const countDisplay = document.getElementById('count');

button.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});