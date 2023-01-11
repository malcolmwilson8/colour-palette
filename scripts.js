let spaceBar = document.getElementsByTagName("button")[0];
/* Declaring the variable currentColour with document.getElementsByClassName turns it into an array, 
which we can loop through afterwards  */
let allColours = document.getElementsByClassName("container");
let currentColour1 = document.getElementsByClassName("current-hex1");
let currentColour2 = document.getElementsByClassName("current-hex2");
let currentColour3 = document.getElementsByClassName("current-hex3");
let currentColour4 = document.getElementsByClassName("current-hex4");
let currentColour5 = document.getElementsByClassName("current-hex5");
/* Do the same for the colour variable and hexChange, which will be looped through for each element  */
let colour1 = document.getElementsByClassName("colour-content1");
let colour2 = document.getElementsByClassName("colour-content2");
let colour3 = document.getElementsByClassName("colour-content3");
let colour4 = document.getElementsByClassName("colour-content4");
let colour5 = document.getElementsByClassName("colour-content5");
let hexChange1 = document.getElementsByClassName("hex-changer1");
let hexChange2 = document.getElementsByClassName("hex-changer2");
let hexChange3 = document.getElementsByClassName("hex-changer3");
let hexChange4 = document.getElementsByClassName("hex-changer4");
let hexChange5 = document.getElementsByClassName("hex-changer5");
let lockit = document.getElementsByClassName("toggle-lock");
let copyit1 = document.getElementById("copy-colour1");
let copyit2 = document.getElementById("copy-colour2");
let copyit3 = document.getElementById("copy-colour3");
let copyit4 = document.getElementById("copy-colour4");
let copyit5 = document.getElementById("copy-colour5");
let xportBtn = document.getElementById("export-button");

xportBtn.addEventListener('click', function(e){
    e.preventDefault();
    for(let x = 0; x < 5; x++){
        let paletteStorage = new Array();
        paletteStorage.push(colour1[x].textContent, colour2[x].textContent, colour3[x].textContent, colour4[x].textContent, colour5[x].textContent);
        paletteStorage = paletteStorage.toString();
        paletteStorage = paletteStorage.replace(/[\s\n]+/g, ' ');
        paletteStorage = paletteStorage.replace(/(["])/g, '');
        paletteStorage = [paletteStorage];
        var blob1 = new Blob(paletteStorage, { type: "text/plain;charset=utf-8" });
        var url = window.URL || window.webkitURL;
                link = url.createObjectURL(blob1);
                var a = document.createElement("a");
                a.download = "Palette.txt";
                a.href = link;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
    alert("Current palette exported in txt format.")
    }
    
})

// Added functionality which performs when spacebar is pressed and performs the changeColours function
let spacePressed = document.body.onkeyup = function(e){if(e.keyCode == 32){genColours()}};


// Trying to add lock functionality
// lockit.addEventListener('click', () => {})

// For loop which copies the current colour, displaying an alert

for(let x = 0; x < colour1.length; x++){
    copyit1.addEventListener('click', function(){
        navigator.clipboard.writeText(colour1[x].textContent);
        alert(colour1[x].textContent + "copied to clipboard.")
    })
}

for(let x = 0; x < colour2.length; x++){
    copyit2.addEventListener('click', function(){
        navigator.clipboard.writeText(colour2[x].textContent);
        alert(colour2[x].textContent + "copied to clipboard.")
    })
}

for(let x = 0; x < colour3.length; x++){
    copyit3.addEventListener('click', function(){
        navigator.clipboard.writeText(colour3[x].textContent);
        alert(colour3[x].textContent + "copied to clipboard.")
    })
}

for(let x = 0; x < colour4.length; x++){
    copyit4.addEventListener('click', function(){
        navigator.clipboard.writeText(colour4[x].textContent);
        alert(colour4[x].textContent + "copied to clipboard.")
    })
}

for(let x = 0; x < colour5.length; x++){
    copyit5.addEventListener('click', function(){
        navigator.clipboard.writeText(colour5[x].textContent);
        alert(colour5[x].textContent + "copied to clipboard.")
    })
}


/* For loop which responds to users manually selecting a colour within the colour picker. 
Also assigns newly updated colour to currentColour text */

for(let x = 0; x < colour1.length; x++){
    hexChange1[x].addEventListener('change', function(){
        colour1[x].style.backgroundColor = this.value;
        currentColour1[x].textContent = this.value})  
}

for(let x = 0; x < colour2.length; x++){
    hexChange2[x].addEventListener('change', function(){
        colour2[x].style.backgroundColor = this.value;
        currentColour2[x].textContent = this.value})  
}

for(let x = 0; x < colour3.length; x++){
    hexChange3[x].addEventListener('change', function(){
        colour3[x].style.backgroundColor = this.value;
        currentColour3[x].textContent = this.value})  
}

for(let x = 0; x < colour4.length; x++){
    hexChange4[x].addEventListener('change', function(){
        colour4[x].style.backgroundColor = this.value;
        currentColour4[x].textContent = this.value})  
}

for(let x = 0; x < colour5.length; x++){
    hexChange5[x].addEventListener('change', function(){
        colour5[x].style.backgroundColor = this.value;
        currentColour5[x].textContent = this.value})  
}

function genColours(){
    for(let x = 0; x < colour1.length; x++){
        /* math.floor will return a whole number. Math.random will provide a random number out of the 16,777,215 
        possible hex code combinations which we can assign to the div. The number will be padded with 
        6 0's, so that the resulting string always reaches 6 characters  */
        let randomHex = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        // Set the colour of the div (by iterating through it with x) to a random hex colour
        colour1[x].style.backgroundColor = '#' + randomHex;
        // Update hex code text displayed for the div to show the colour it currently is
        currentColour1[x].textContent = '#' + randomHex;
        hexChange1[x].value = currentColour1[x].textContent;
    }

    for(let x = 0; x < colour2.length; x++){
        let randomHex = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        colour2[x].style.backgroundColor = '#' + randomHex;
        currentColour2[x].textContent = '#' + randomHex;
        hexChange2[x].value = currentColour2[x].textContent;
    }

    for(let x = 0; x < colour3.length; x++){
        let randomHex = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        colour3[x].style.backgroundColor = '#' + randomHex;
        currentColour3[x].textContent = '#' + randomHex;
        hexChange3[x].value = currentColour3[x].textContent;
    }

    for(let x = 0; x < colour4.length; x++){

        let randomHex = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        colour4[x].style.backgroundColor = '#' + randomHex;
        currentColour4[x].textContent = '#' + randomHex;
        hexChange4[x].value = currentColour4[x].textContent;
    }

    for(let x = 0; x < colour5.length; x++){
        let randomHex = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        colour5[x].style.backgroundColor = '#' + randomHex;
        currentColour5[x].textContent = '#' + randomHex;
        hexChange5[x].value = currentColour5[x].textContent;
    }
        // // converts hex string to RGB

        // String.prototype.convertToRGB = function(){

        //     var aRgbHex = this.match(/.{1,2}/g);
        //     var aRgb = [
        //         parseInt(aRgbHex[0], 16),
        //         parseInt(aRgbHex[1], 16),
        //         parseInt(aRgbHex[2], 16)
        //     ];
        //     return aRgb;
        // }
        
        // // // converts rgb value to hex
        
        // function rgbToHex(rgb) {
        //     let hex = '';
        
        //     for (let i = 0; i < rgb.length; i++) {
        //         hex += rgb[i].toString(16);
        //     }
        
        //     return hex;
        // }

        // // // generate first shade below

        // if(randomHex.convertToRGB()[0] <= 255 && randomHex.convertToRGB()[0] > 50){
        //     let shade1 = [randomHex.convertToRGB()[0] - 20, randomHex.convertToRGB()[1], randomHex.convertToRGB()[2]]
        //     console.log(rgbToHex(shade1));
        //     let finalShade = '#' + rgbToHex(shade1).padStart(6, '0');
        //     console.log(finalShade)
        //     for(let y = 0; y < colour2.length; y++){
        //         colour2[y].style.backgroundColor = finalShade;
        //         currentColour2[y].textContent = finalShade;
        //         hexChange2[y].value = currentColour2[y].textContent;
        //     }

        // } 
    }
