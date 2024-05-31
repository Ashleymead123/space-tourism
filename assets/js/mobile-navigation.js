"use strict";

import data from './data.json' with {type: 'json'};

const dropDownMenu = document.querySelector(".mobile-nav-dropdown");
const dropDownIcon = document.querySelector(".mobile-nav-hamburger");
let dropdownStatus = false; // fasle = closed true = open

function openDropdown() {
    if (dropdownStatus === false){
        dropDownMenu.style.right = "0";
        dropDownIcon.src = "assets/shared/icon-close.svg"
        dropDownIcon.style.height = "24px"
        dropdownStatus = true;
    } else {
        dropDownMenu.style.right = "-400px";
        dropDownIcon.src = "assets/shared/icon-hamburger.svg"
        dropDownIcon.style.height = "21px"
        dropdownStatus = false;
    }
}

dropDownIcon.addEventListener("click", openDropdown);




