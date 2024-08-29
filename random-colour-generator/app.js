let h1 = document.querySelector('h1');
h1.style.textAlign = "center";

let button = document.querySelector('button');
button.style.display = 'block'; // Make the button a block-level element
button.style.margin = '0 auto'; // Center horizontally
button.addEventListener('click', () => {
    let r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let color = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = color;
    h1.innerText = color;
})