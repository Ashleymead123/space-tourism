"use strict";

import data from './data.json' with {type: 'json'};

let destinations = data.destinations;

console.log(destinations)

const destinationImgField = document.getElementById("destinationImgField");
const destinationNameField = document.getElementById("destinationNameField");
const destinationDescriptionField = document.getElementById("destinationDescriptionField");
const destinationDistanceField = document.getElementById("destinationDistanceField");
const destinationTimeField = document.getElementById("destinationTimeField");

const tabContainer = document.getElementById("tabContainer")
let destinationsFieldArray = [destinationImgField, destinationNameField, destinationDescriptionField, destinationDistanceField, destinationTimeField];

let tabArray = [];

// Generates tabs
for (let planet of destinations) {
    const createTab = document.createElement("li");
    createTab.classList.add("destinations-slider-tab", "navigation-text", "is-clr-primary-500", "is-uppercase");
    createTab.id = planet.name;
    createTab.textContent = planet.name;
    tabContainer.appendChild(createTab);
    tabArray.push(createTab);
}

// add selected class to first tab
tabArray[0].classList.add("destinations-slider-tab-selected");

// finds the planet information based on the tab clicked and styles appropriatly
function checkDestination (){
    tabArray.forEach(item => item.classList.remove("destinations-slider-tab-selected"))
    let planetInfo = destinations.find(item => item.name === this.id);

    destinationsFieldArray.forEach(field => field.classList.add("hidden"));

    setTimeout(() => {
        destinationsFieldArray.forEach(field => field.classList.remove("hidden"));

        destinationImgField.src = planetInfo.images.png;
        destinationNameField.textContent = planetInfo.name;
        destinationDescriptionField.textContent = planetInfo.description;
        destinationDistanceField.textContent = planetInfo.distance;
        destinationTimeField.textContent = planetInfo.travel;
        
        destinationsFieldArray.forEach(field => field.classList.add("visible"));
    }, 300);
  
    let currentTab = document.getElementById(this.id);
    currentTab.classList.add("destinations-slider-tab-selected")
}

// adds event listeners to each tab
tabArray.forEach(item => item.addEventListener("click", checkDestination));