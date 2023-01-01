let spaceBar = document.getElementsByTagName("button")[0];
/* Declaring the variable currentColour with document.getElementsByClassName turns it into an array, 
which we can loop through afterwards  */
let currentColour = document.getElementsByClassName("current-hex");
/* Do the same for the colour variable and hexChange, which will be looped through for each element  */
let colour = document.getElementsByClassName("colour-content");
let hexChange = document.getElementsByClassName("hex-changer")
const lockit = document.getElementsByClassName("toggle-lock");
const copyit = document.getElementById("copy-colour");

// Added functionality which activates only if the spacebar is pressed, and performs the changeColours function
let spacePressed = document.body.onkeyup = function(e){if(e.keyCode == 32){changeColours()}};
// Added auto load event listener which automatically generates multiple colours
document.addEventListener("DOMContentLoaded", changeColours());

// Trying to add lock functionality
// lockit.addEventListener('click', () => {})

function changeColours(){
    for(let x = 0; x < colour.length; x++){
        /* math.floor will return a whole number. Math.random will provide a random number out of the 16777216 
        possible hex code combinations which we can assign to each div, start of the number will be padded with 
        6 0's, so that the resulting string always reaches 6 characters  */
        let randomHex = Math.floor(Math.random()*16777216).toString(16).padStart(6, '0');
        // Set the colour of each div (by iterating through each with x) to a random hex colour
        colour[x].style.backgroundColor = '#' + randomHex;
        // Update hex code text displayed for each div to show the colour it currently is
        currentColour[x].textContent = '#' + randomHex;
        hexChange[x].value = currentColour[x].textContent;
    }
}

/* For loop which responds to users manually selecting a colour within the colour picker. 
Also assigns newly updated colour to currentColour text */
for(let x = 0; x < colour.length; x++){
    hexChange[x].addEventListener('change', function(){
        colour[x].style.backgroundColor = this.value;
        currentColour[x].textContent = this.value})  
}
