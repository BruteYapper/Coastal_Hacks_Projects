let bar = document.getElementById("die-bar")
let yearText = document.getElementById("year-num")
let fact = document.getElementById("facts-text")
let earth = document.getElementById("earth")
let factPopUp = document.getElementById("fact-popup")

let curYear = new Date().getFullYear()
let curRotation = 0

document.addEventListener("load", updateFact(1900), bar.value = 1900, updateYear());

bar.addEventListener("input", updateYear) //"input" updates while draging, "change" updates when realesed

function updateYear() {
    yearText.textContent = bar.value;
    updateFact(bar.value);
}

function updateFact(year) {
    let blurb = " ";
    let special = true;
    if (year == 1900) {
        blurb = "And so it begins...";
    }
    else if (year == 2050) {
        blurb = "Due to Ocean Acidification, worldwide coral growth has been cut in half";
    }
    else if (year == 2100) {
        blurb = "Coastal cities are Now in Danger of Being Destroyed by the Ocean";
    }
    else {
        if (year < curYear) //if its in the past
        {
            blurb = "By " + year + " the sea level had increased by " + ((0.06265582 * year) - 118.31796934379962).toFixed(2) + " inches since 1880";
        }
        else {//if its in the future
            blurb = "By " + year + " the sea level will have increased by " + ((0.06265582 * year) - 118.31796934379962).toFixed(2) + " inches since 1880";
        }
        special = false //cuz its not a special year so the popup is gone
    }
    fact.textContent = blurb;
    rotateEarth(year)
    showPopup(special);
}

function rotateEarth(year) {
    let rotAmt = -(1900 - year) * (360 / 200);
    earth.style.transform = "rotate(" + rotAmt + "deg)";
}

function showPopup(show) {
    if (show) {
        factPopUp.style.visibility = "visible"
    }
    else {
        factPopUp.style.visibility = "hidden"
    }
}
