// Random RGB Color Number Generator
function randomColorNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random RGB color and apply it to the div and update the heading
function getRandomColor() {
    let r = randomColorNum(0, 255);
    let g = randomColorNum(0, 255);
    let b = randomColorNum(0, 255);
    let color = `rgb(${r}, ${g}, ${b})`;
    div2.style.backgroundColor = color;
    heading1.innerText = `COLOR : ${color}`;
}

// Function to reset the page to its initial state
function resetPage() {
    heading1.innerText = "Generate a Random Color";
    div2.style.backgroundColor = "transparent";
}

const body = document.querySelector("body");

const div1 = document.createElement("div");
body.appendChild(div1);
div1.classList.add("body-div");

const heading1 = document.createElement("h1");
heading1.innerText = "Generate a Random Color";
div1.appendChild(heading1);

const btn1 = document.createElement("button");
btn1.innerText = "Generate Color";
div1.appendChild(btn1);

const div2 = document.createElement("div");
div2.classList.add("color-body");
div1.appendChild(div2);

const btn2 = document.createElement("button");
btn2.innerText = "Reset";
btn2.classList.add("reset");
div1.appendChild(btn2);

btn1.onclick = getRandomColor;

btn2.onclick = resetPage;

const footer = document.createElement("footer");
body.appendChild(footer);

const heading4 = document.createElement("h4");
heading4.innerHTML =
    "Made with ❤️ by <a href='https://github.com/4M4ND3Y'>Aman Dey</a>";
footer.appendChild(heading4);
