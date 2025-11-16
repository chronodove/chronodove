//clock
let time = document.getElementById('time'); 

function updateTime() {
    let clock = new Date().toLocaleTimeString();
    time.innerText = clock;
}

setInterval(updateTime, 1000); 


//weather
//define api key and urls
const API_KEY = '63656058e7b72cc559182ee4137407ce';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const WEATHER_ICON_URL = 'https://openweathermap.org/img/wn/';

//define containers
let temp = document.getElementById('temp');
let icon = document.getElementById('weather-icon');
let clouds = document.getElementById('clouds');

function returnWeather() {
    //define url to fetch json data from
    const url = `${API_URL}?q=Austin&limit=1&appid=${API_KEY}&units=imperial`;

    fetch(url)
        .then(response => response.json()) //check if the response is successful and parse into json
            .then(data => { //process fetched data
                temp.innerText = `${Math.round(data.main.temp)}°F `;
                icon.innerHTML = `<img src="${WEATHER_ICON_URL}${data.weather[0].icon}.png">`; //need to make an entire new <img>, can't edit an already existing one.
                clouds.innerText = data.clouds.all + "%";
            })
            //check for errors
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
}

//run function
returnWeather()