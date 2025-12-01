//clock
let time = document.getElementById('time'); 

function updateTime() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    time.innerHTML =  h + ":" + m + ":" + s;
}
setInterval(updateTime, 1000); 

//weather
async function returnWeather() {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=30.2672&longitude=-97.7431&current_weather=true&temperature_unit=fahrenheit`);
        const data = await response.json();
        const weather = data.current_weather;
        const weather_units = data.current_weather_units; //instead of having to write the units manually, just fetch them from api

        let code = weather.weathercode; //weather code to determine icon
        let temp = Math.ceil(weather.temperature); //round up weather
        console.log("UNROUNDED TEMP: " + weather.temperature);
        console.log("TEMP: " + temp);
        console.log("WEATHER CODE: " + code); 

        let icon = "☀️"; //default icon
        if (code >= 51 && code <= 82) {
            icon = "🌧"; //raining
        } else if (code >= 71 && code < 80) {
            icon = "❄️" //snowing
        } else if (code == 3) {
            icon = "☁️"; //cloudy
        } else if (code == 2) {
            icon = "⛅️"; //partly cloudy
        } else if (code == 1) {
            icon = "🌤️" //mostly clear
        } else if (code == 45 || code == 48) {
            icon = "🌫️"; //foggy
        } else if (code >= 95) {
            icon = "⛈️"; //thunderstorm
        }

        const tempContainer = document.getElementById('weather-and-temp');
        tempContainer.innerHTML = 
        `
            <span>${temp}${weather_units.temperature}</span>
            // 
            <span>${icon}</span>
        `; 
    }
    catch(error) {
        const tempContainer = document.getElementById('weather-and-temp');
        tempContainer.innerHTML = '<span>Error getting weather data!</span>';
        console.error('Error fetching data:', error);
    }
}
//run function
returnWeather()