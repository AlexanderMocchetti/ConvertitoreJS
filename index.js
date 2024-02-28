const label1 = document.getElementById("label-1")
const label2 = document.getElementById("label-2")

const inputBar = document.getElementById("input")
const result = document.getElementById("result")

const buttonSwitch = document.getElementById("button-switch")
const buttonConvert = document.getElementById("button-convert")

const KM_TO_MILES = 0.621371;
const MILES_TO_KM = 1.60934;

let ratio = KM_TO_MILES;

function switchRatio() {
    if (ratio === KM_TO_MILES) {
        ratio = MILES_TO_KM
        label1.textContent = "Miglia"
        label2.textContent = "Km: "
    } else {
        ratio = KM_TO_MILES
        label1.textContent = "Km"
        label2.textContent = "Miglia: "
    }
}

buttonSwitch.addEventListener('click', switchRatio)

function convert() {
    if (inputBar.value.length === 0)
        return
    let amount = parseFloat(inputBar.value)
    let convertedAmount = amount * ratio
    result.textContent = convertedAmount
}

buttonConvert.addEventListener("click", convert)