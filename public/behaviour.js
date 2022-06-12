let bar = document.getElementById("die-bar")
let yearText = document.getElementById("year-num")
let fact = document.getElementById("facts-text")
let earth = document.getElementById("earth")
let factPopUp = document.getElementById("fact-popup")
let waterLevel = document.getElementById("water-level");
let person = document.getElementById("person");

let curYear = new Date().getFullYear()
let curRotation = 0
let blurb;
let special;
const info = {
    1900: "And so it begins...",
    1915: "Glaciers all around the world start melting faster than they can grow",
    2022: "The IPCC warns that \"Half measures are no longer an option\" if Climate risks are to be mitigated",
    2040: "During the summer months, there is no ice in the arctic",
    2050: "Due to Ocean Acidification, worldwide coral growth has been cut in half",
    2090: "Well over half of the world's glaciers have melted permanently",
    2100: "Coastal cities are Now in Danger of Being Destroyed by the Ocean"
}
document.addEventListener("load", updateFact(1900), bar.value = 1900, updateYear());

bar.addEventListener("input", updateYear) //"input" updates while draging, "change" updates when realesed

function updateYear() {
    yearText.textContent = bar.value;
    updateFact(bar.value);
}

function updateFact(year) {
    special = true;

    if (info[year] != undefined) {
        blurb = info[year];
    } else {
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
    rotateEarth(year);
    raiseWater(year);
    showPopup(special);
}

function rotateEarth(year) {
    let rotAmt = -(1900 - year) * (360 / 200);
    earth.style.transform = "rotate(" + rotAmt + "deg)";
}

<<<<<<< HEAD
function raiseWater(year){
    let raiseAmt = -(1900 - year) * (460/200)
    waterLevel.style.top = -raiseAmt+"px";
    waterLevel.style.height = raiseAmt+"px";
    if(year >= 2085){
        person.src = "Imgs/person-dead.png ";
    }
    else{
=======
function raiseWater(year) {
    let raiseAmt = -(1900 - year) * (460 / 200)
    waterLevel.style.top = -raiseAmt + "px";
    waterLevel.style.height = raiseAmt + "px";
    if (year >= 2083) {
        person.src = "Imgs/person-dead.png ";
    }
    else {
>>>>>>> parent of eb57784... last commit 2
        person.src = "Imgs/person.png";
    }
}

function showPopup(show) {
    if (show) {
        factPopUp.style.visibility = "visible"
    }
    else {
        factPopUp.style.visibility = "hidden"
    }
}
