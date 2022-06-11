let bar = document.getElementById("die-bar")
let yearText = document.getElementById("year-num")
let fact = document.getElementById("facts-text")

document.addEventListener("load", updateFact(1920), bar.value = 1920, updateYear());

bar.addEventListener("input", updateYear) //"input" updates while draging, "change" updates when realesed

function updateYear() {
    yearText.textContent = bar.value;
    updateFact(bar.value);
}

function updateFact(year) {
    let blurb = " ";
    if (year == 1900) {
        blurb = "your moms a hoe";
    }
    else if (year == 1969 || year == 2069) {
        blurb = "nice";
    }
    else if (year == 2050) {
        blurb = "Due to Ocean Acidification, worldwide coral growth has been cut in half";
    }
    else if (year == 2100) {
        blurb = "Tokyo, Mumbai, New York, and others are all compleatly underwater";
    }
    else {
        if (year < new Date().getFullYear()) //if its in the past
        {
            blurb = "By " + year + " the sea level had increased by " + ((0.06265582 * year) - 118.31796934379962).toFixed(2) + " inches since 1880";
        }
        else {//if its in the future
            blurb = "By " + year + " the sea level will have increased by " + ((0.06265582 * year) - 118.31796934379962).toFixed(2) + " inches since 1880";
        }
    }
    fact.textContent = blurb;
}
