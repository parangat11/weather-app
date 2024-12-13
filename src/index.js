import "./style.css"

const locationBox = document.querySelector('#location-ip');
const submitBtn = document.querySelector('#submit');
const loader = document.querySelector('#loader');

function showLoader() {
    loader.classList.add('visible');
}

function hideLoader() {
    loader.classList.remove('visible');
}

function clearPreviousResponses() {
    for(let i = 0; i < 5; i++) {
        const currDateDiv = document.querySelector(`.day-${i+1}`);
        currDateDiv.textContent = "";
    }
}

async function showTheWeather(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=QYRSBVZGMMFQCKJQ2F54JT4KS`;
    clearPreviousResponses();
    showLoader();
    const response = await fetch(url);
    const result = await response.json();
    hideLoader();
    console.log(result);
    console.log(result.address);
    for(let i = 0; i < 5; i++) {
        const currDateDiv = document.querySelector(`.day-${i+1}`);
        currDateDiv.textContent = result.days[i+1].conditions;
    }
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const location = locationBox.value;
    showTheWeather(location);
})