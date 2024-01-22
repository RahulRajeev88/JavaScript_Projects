

const hexBtn = document.querySelector('.hex-btn');
const hexColorValue = document.querySelector('.hex-color-value');
const hexColorContainer = document.querySelector('.hex-color-container');
const hexCopyColor = document.querySelector('.hex-copy-color');

// create random hex color

hexBtn.addEventListener('click', ()=>{
    let characterSet = '0123456789ABCDEF';
    let hexColorOutput = "";
    
    for (let i = 0, charSetlength = characterSet.length; i<6; ++i) {
        hexColorOutput += characterSet.charAt(Math.floor(Math.random() * charSetlength));
    }

    hexColorValue.textContent = `#${hexColorOutput}`;
    hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
    hexBtn.style.color =  `#${hexColorOutput}`;
});

//RGB Color Selector

const rgbBbutton = document.querySelector('.rgb-button');
const getRedInputRange = document.querySelector('#red');
const getGreenInputRange = document.querySelector('#green');
const getBlueInputRange = document.querySelector('#blue');
const rgbColorContainer = document.querySelector('.rgb-color-container');
const rgbCopyColor = document.querySelector('.rgb-copy-color');
const rgbColorValue = document.querySelector('.rgb-color-value');

rgbBbutton.addEventListener('click', ()=> {
    let extractRedValue = getRedInputRange.value;
    let extractGreenValue = getGreenInputRange.value;
    let extractBlueValue = getBlueInputRange.value;
    
    rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
    rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
    rgbBbutton.style.color = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
})



function copyHexColorToClipboard() {
    navigator.clipboard.writeText(hexColorValue.textContent);
    alert("hex color is copied to clipboard")


}

hexCopyColor.addEventListener("click", copyHexColorToClipboard);


function copyRgbColor() {
    navigator.clipboard.writeText(rgbColorValue.textContent)
    alert("RGB color is copied to clipboard")

}

rgbCopyColor.addEventListener("click",copyRgbColor);