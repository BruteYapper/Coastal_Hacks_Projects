let bar = document.getElementById("die-bar")
let yearText = document.getElementById("year-num")


bar.addEventListener("input", updateYear) //"input" updates while draging, "change" updates when realesed

function updateYear() {
    yearText.textContent = bar.value;
}