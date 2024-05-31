"use strict";

import data from './data.json' with {type: 'json'};

let crew = data.crew;

const dotContainer = document.querySelector(".crew-slider-dot-container");
const dotArray = [];

const memberNameField = document.getElementById("memberNameField");
const memberRoleField = document.getElementById("memberRoleField");
const memberBioField = document.getElementById("memberBioField");
const memberImgField = document.getElementById("memberImgField");

const memberFieldsArray = [memberNameField, memberRoleField, memberBioField, memberImgField];

//creates a dot for each member of the crew
for (let member of crew) {
    const createDot = document.createElement("span");
    createDot.id = member.role;
    dotContainer.appendChild(createDot).classList.add('crew-slider-dot');
    dotArray.push(createDot);
}

//turns first dot white
dotArray[0].classList.add("crew-slider-dot-selected");

// finds the members information based on the dot clicked and styles appropriatly
function checkMember(){
    dotArray.forEach(item => item.classList.remove("crew-slider-dot-selected"))
    let memberInfo = crew.find(item => item.role === this.id);

    memberFieldsArray.forEach(field => field.classList.add("hidden"));

    setTimeout(() => {
        memberFieldsArray.forEach(field => field.classList.remove("hidden"));

        memberNameField.textContent = memberInfo.name;
        memberRoleField.textContent = memberInfo.role;
        memberBioField.textContent = memberInfo.bio;
        memberImgField.src = memberInfo.images.png;
        
        memberFieldsArray.forEach(field => field.classList.add("visible"));
    }, 300);
  
    let currentDot = document.getElementById(this.id);
    currentDot.classList.add("crew-slider-dot-selected")
}

// adds event listeners to each dot
dotArray.forEach(item => item.addEventListener("click", checkMember));
