const display = document.querySelector(".display");
const button = document.querySelector(".mg");
const location_name = document.querySelector(".location_name");
const temperature = document.querySelector(".tt");
const humidity = document.querySelector(".hh");
const weather_condition = document.querySelector(".weather_condition");
const i = document.querySelector("i");
const material = document.querySelector(".material-symbols-outlined");
const temm = document.querySelector("#temm");
const container = document.querySelector("#container");
const input_area = document.querySelector(".input_area");
const error = document.querySelector(".error");
button.addEventListener("click", async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=bba508e8ba310961d4ab60754a92f6c9&q=${display.value}`;
    let response = await fetch(url);
    if(response.status == 404 ) {
        error.style.display = "block";
    }else {
        error.style.display = "none";
        let mm = await response.json();
        container.style.height = "80%";
        input_area.style.height = "7%";
        material.innerText = "humidity_percentage";
        temm.className = "fa-solid fa-temperature-three-quarters tw";
        if(mm.weather[0].main === "Clouds"){
            i.className = "wi wi-cloudy";
        }else if(mm.weather[0].main === "Clear"){
            i.className = "wi wi-day-sunny";
        }else if(mm.weather[0].main === "Rain"){
            i.className = "wi wi-rain";
        }else if(mm.weather[0].main === "Drizzle"){
            i.className = "wi wi-rain";
        }else if(mm.weather[0].main === "Mist"){
            i.className = "wi wi-fog";}
        location_name.innerText = mm.name;
        temperature.innerHTML = `Temperature<br>${Math.round(mm.main.temp)}°C`;
        humidity.innerHTML = `Humidity<br>${mm.main.humidity}%`;
        weather_condition.innerText = `${mm.weather[0].main}(${mm.weather[0].description})`;
    }
});
