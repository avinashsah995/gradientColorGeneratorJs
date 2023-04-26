const colorInputs = document.querySelectorAll(".colors input");
const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const textArea = document.querySelector('textarea');
const refreshBtn = document.querySelector('.refresh');
const copyBtn = document.querySelector('.copy');

const getRandomColor = () => {
    // generating a random in hexadecimal format. ex: #5665E9
    const randomHex = Math.floor(Math.random() * 0xffffff) . toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
    // if random is true, update the colors inputs value with random color
    if(isRandom) {
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }
    // creating a gradient string using the select menu value with color input values
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;

    // const gradient = `linear-gradient(` + selectMenu.value + `, ` + colorInputs[0].value + `, ` + colorInputs[1].value + `);` ;

    gradientBox.style.background = gradient;

    textArea.value = `background:` + gradient;

}

const copyCode = () => {
    navigator.clipboard.writeText(textArea.value);
    copyBtn.innerText = "Code Copied";
    setTimeout(() => copyBtn.innerText = "Copy Code", 1600);
}

colorInputs.forEach(input => {
    //calling generateGradient function each color input clicks
    input.addEventListener("input", () => generateGradient(false));
});

selectMenu.addEventListener("change", () => generateGradient(false));
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);

