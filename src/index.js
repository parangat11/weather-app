import "./style.css"

const locationBox = document.querySelector('#location-ip');
const submitBtn = document.querySelector('#submit');

async function showTheWeather(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=QYRSBVZGMMFQCKJQ2F54JT4KS`;
    const response = await fetch(url);
    const result = await response.json();
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