"use strict";

import data from './data.json' with {type: 'json'};

let technology = data.technology;

const techSliderList = document.getElementById("techSliderList");
const techSliderImg = document.getElementById("techSliderImg");
const techSliderTitle = document.getElementById("techSliderTitle");
const techSliderDescription = document.getElementById("techSliderDescription");

let fieldsArray = [techSliderImg, techSliderTitle, techSliderDescription];

let dotArray = [];

let currentDotValue = 0;

//creates a dot for each slider

for (let object of technology) {
    const createDot = document.createElement("li");
    createDot.id = object.name;
    techSliderList.appendChild(createDot).classList.add("headingS", "tech-slider-number");
    dotArray.push(createDot);
}

// changes text of each dot
for(const [index, value] of dotArray.entries()) {
    value.textContent = index + 1;
    value.value = index;
}

// add selected class to first dot
dotArray[0].classList.add("tech-slider-number-selected");


// finds the planet information based on the tab clicked and styles appropriatly
function checkTechnology (){
    dotArray.forEach(item => item.classList.remove("tech-slider-number-selected"))
    let techInfo = technology.find(item => item.name === this.id);

    fieldsArray.forEach(field => field.classList.add("hidden"));

    setTimeout(() => {
        fieldsArray.forEach(field => field.classList.remove("hidden"));


        
        techSliderTitle.textContent = techInfo.name;
        techSliderDescription.textContent = techInfo.description;

        adjustImg();
        
        fieldsArray.forEach(field => field.classList.add("visible"));
    }, 300);
  
    let currentDot = document.getElementById(this.id);
    currentDot.classList.add("tech-slider-number-selected")

    currentDotValue = this.value;
}


// switches img src based on screen size
function adjustImg() {
    if (window.innerWidth > 1440) {
        techSliderImg.src = technology[currentDotValue].images.portrait;
    } else {
        techSliderImg.src = technology[currentDotValue].images.landscape;
    }
}

// fires above function when screen changes size
window.onresize = adjustImg;

// adds event listeners to each tab
dotArray.forEach(item => item.addEventListener("click", checkTechnology));