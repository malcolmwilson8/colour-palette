let spaceBar = document.getElementsByTagName("button")[0];
//** Declaring the variable currentColour with document.getElementsByClassName turns it into an array, which we can loop through afterwards  */
let currentColour = document.getElementsByClassName("hex-input");
//** Do the same for the colour variable, which will be looped through for each element  */
let colour = document.getElementsByClassName("colour-content");
const lockit = document.getElementById("toggle-lock");
const copyit = document.getElementById("copy-colour");

// Added functionality which activates only if the spacebar is pressed, and performs the changeColours function
document.body.onkeyup = function(e){if(e.keyCode == 32){changeColours()}};
// Added auto load event listener which automatically generates multiple colours
document.addEventListener("DOMContentLoaded", changeColours());

lockit.addEventListener('click', () => {})

function changeColours(){
    for(let x = 0; x < colour.length; x++){
        //** math.floor will return a whole number. Math.random will provide a random number out of the 16777215 possible hex code combinations which we can assign to each div */
        let randomHex = Math.floor(Math.random()*16777215).toString(16);
        // Set the colour of each div (by iterating through each with x) to a random hex colour
        colour[x].style.backgroundColor = '#' + randomHex;
        // Update hex code info for each div to show the colour it currently is
        currentColour[x].textContent = '#' + randomHex;
    }
}
