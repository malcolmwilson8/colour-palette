let spaceBar = document.getElementsByTagName("button")[0];
/* Declaring the variable currentColour with document.getElementsByClassName turns it into an array, 
which we can loop through afterwards  */
let allColours = document.getElementsByClassName("container");
let currentColour = document.getElementsByClassName("current-hex1");
let currentColour2 = document.getElementsByClassName("current-hex2");
let currentColour3 = document.getElementsByClassName("current-hex3");
let currentColour4 = document.getElementsByClassName("current-hex4");
let currentColour5 = document.getElementsByClassName("current-hex5");
/* Do the same for the colour variable and hexChange, which will be looped through for each element  */
let colour = document.getElementsByClassName("colour-content1");
let colour2 = document.getElementsByClassName("colour-content2");
let colour3 = document.getElementsByClassName("colour-content3");
let colour4 = document.getElementsByClassName("colour-content4");
let colour5 = document.getElementsByClassName("colour-content5");
let hexChange = document.getElementsByClassName("hex-changer");
let hexChange2 = document.getElementsByClassName("hex-changer2");
let hexChange3 = document.getElementsByClassName("hex-changer3");
let hexChange4 = document.getElementsByClassName("hex-changer4");
let hexChange5 = document.getElementsByClassName("hex-changer5");
const lockit = document.getElementsByClassName("toggle-lock");
const copyit = document.getElementById("copy-colour");

// Added functionality which activates only if the spacebar is pressed, and performs the changeColours function
let spacePressed = document.body.onkeyup = function(e){if(e.keyCode == 32){changeColours()}};


// Trying to add lock functionality
// lockit.addEventListener('click', () => {})

function changeColours(){
    for(let x = 0; x < colour.length; x++){
        /* math.floor will return a whole number. Math.random will provide a random number out of the 16,777,215 
        possible hex code combinations which we can assign to each div. The number will be padded with 
        6 0's, so that the resulting string always reaches 6 characters  */
        let randomHex = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        // Set the colour of each div (by iterating through each with x) to a random hex colour
        colour[x].style.backgroundColor = '#' + randomHex;
        // Update hex code text displayed for each div to show the colour it currently is
        currentColour[x].textContent = '#' + randomHex;
        hexChange[x].value = currentColour[x].textContent;
        // console.log (randomHex);

        // converts hex string to RGB

        String.prototype.convertToRGB = function(){

            var aRgbHex = this.match(/.{1,2}/g);
            var aRgb = [
                parseInt(aRgbHex[0], 16),
                parseInt(aRgbHex[1], 16),
                parseInt(aRgbHex[2], 16)
            ];
            return aRgb;
        }
        
        // converts rgb value to hex
        
        function rgbToHex(rgb) {
            let hex = '';
        
            for (let i = 0; i < rgb.length; i++) {
                hex += rgb[i].toString(16);
            }
        
            return hex;
        }

        // generate first shade below

        if(randomHex.convertToRGB()[0] <= 255 && randomHex.convertToRGB()[0] > 20){
            let shade1 = [randomHex.convertToRGB()[0] - 20, randomHex.convertToRGB()[1], randomHex.convertToRGB()[2]]
            console.log(rgbToHex(shade1));
            let finalShade = '#' + rgbToHex(shade1).padStart(6, '0');
            console.log(finalShade)
            for(let y = 0; y < colour2.length; y++){
                colour2[y].style.backgroundColor = finalShade;
                currentColour2[y].textContent = finalShade;
                hexChange2[y].value = currentColour2[y].textContent;
            }

        } 

        // generate second shade below

        if(randomHex.convertToRGB()[0] <= 255 && randomHex.convertToRGB()[0] > 40){
            let shade2 = [randomHex.convertToRGB()[0] - 35, randomHex.convertToRGB()[1], randomHex.convertToRGB()[2]]
            console.log(rgbToHex(shade2));
            let finalShade2 = '#' + rgbToHex(shade2).padStart(6, '0');
            console.log(finalShade2)
            for(let y = 0; y < colour3.length; y++){
                colour3[y].style.backgroundColor = finalShade2;
                currentColour3[y].textContent = finalShade2;
                hexChange3[y].value = currentColour3[y].textContent;
            }

        } 

        // generate third shade below

        if(randomHex.convertToRGB()[0] <= 255 && randomHex.convertToRGB()[0] > 60){
            let shade3 = [randomHex.convertToRGB()[0] - 50, randomHex.convertToRGB()[1], randomHex.convertToRGB()[2]]
            console.log(rgbToHex(shade3));
            let finalShade3 = '#' + rgbToHex(shade3).padStart(6, '0');
            console.log(finalShade3)
            for(let y = 0; y < colour4.length; y++){
                colour4[y].style.backgroundColor = finalShade3;
                currentColour4[y].textContent = finalShade3;
                hexChange4[y].value = currentColour4[y].textContent;
            }
  
        } 

        // generate fourth shade below

        if(randomHex.convertToRGB()[0] <= 255 && randomHex.convertToRGB()[0] > 70){
            let shade4 = [randomHex.convertToRGB()[0] - 60, randomHex.convertToRGB()[1], randomHex.convertToRGB()[2]]
            console.log(rgbToHex(shade4));
            let finalShade4 = '#' + rgbToHex(shade4).padStart(6, '0');
            console.log(finalShade4)
            for(let y = 0; y < colour5.length; y++){
                colour5[y].style.backgroundColor = finalShade4;
                currentColour5[y].textContent = finalShade4;
                hexChange5[y].value = currentColour5[y].textContent;
            }
       
        } 
    }
}

// [document.querySelector("current-hex1"), document.querySelector("current-hex2"), 
// document.querySelector("current-hex3"), document.querySelector("current-hex4"), 
// document.querySelector("current-hex5")].forEach(item => {
//     item.addEventListener('click', function(){

//     })
// })

// copyit.addEventListener('click', function (){
//     let copyHex = document.getElementsByClassName("current-hex1" || "current-hex2" || "current-hex3" || "current-hex4" || "current-hex5");
//     copyHex.select();
//     navigator.clipboard.writeText(copyHex.textContent);
//     alert(copyHex.value + " Copied to the clipboard")
// })

/* For loops which respond to users manually selecting a colour within the colour picker. 
Also assigns newly updated colour to currentColour text. Made identical loops with other DOM variables 
for further divs */

for(let x = 0; x < allColours.length; x++){
    hexChange[x].addEventListener('change', function(){
        colour[x].style.backgroundColor = this.value;
        currentColour[x].textContent = this.value})  
}

for(let x = 0; x < allColours.length; x++){
    hexChange2[x].addEventListener('change', function(){
        colour2[x].style.backgroundColor = this.value;
        currentColour2[x].textContent = this.value})  
}

for(let x = 0; x < allColours.length; x++){
    hexChange3[x].addEventListener('change', function(){
        colour3[x].style.backgroundColor = this.value;
        currentColour3[x].textContent = this.value})  
}

for(let x = 0; x < allColours.length; x++){
    hexChange4[x].addEventListener('change', function(){
        colour4[x].style.backgroundColor = this.value;
        currentColour4[x].textContent = this.value})  
}

for(let x = 0; x < allColours.length; x++){
    hexChange5[x].addEventListener('change', function(){
        colour5[x].style.backgroundColor = this.value;
        currentColour5[x].textContent = this.value})  
}

    