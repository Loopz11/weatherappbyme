# weatherappbyme
weatherapp code(html,css,js) for public use

//html


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> find weather by monic</title>
    <link rel="icon" href="logo.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.10/css/weather-icons.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=humidity_percentage" />
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="container">
        <div class="input_area">
            <div class="area">
                <input type="text" class="display" placeholder="city name">
                <div class="fa-solid fa-magnifying-glass mg"></div>
            </div>            
            <p class="error">city not found</p>
        </div>
        <div class="for_display"></div>
        <p class="location_name"><!-- Pokhara --></p>
        <div class="weather"><i class=""></i></div>
        <p class="weather_condition"><!-- Sunny --></p>
        <div class="box">
            <div class="temperature">
                <div id="temm" class=""></div>
                <p class="text tt"><!-- Temperature <br> 22°C --></p>
            </div>
            <div class="humidity">
                <span class="material-symbols-outlined tw"><!-- humidity_percentage --></span>
                <p class="text hh"><!-- Humidity <br> 20% --></p>
            </div>
        </div>
    </div>
    <footer>*view in desktop screen for better quality <br>
        <i class="fa-regular fa-copyright"></i> 2024 weather app by monic. All rights reserved.
    </footer>
    <script src="script.js"></script>
</body>
</html>












//css

* {
    padding: 0;
    margin: 0;
}
body {
    width: 100vw;
    height: 100vh;
    background-color: #d9d9d9;
}
#container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #9DD9D2;
    width: 35%;
    height: 10%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 0.2px solid rgba(128, 128, 128, 0.467);
    border-radius: 2%;
    transition: height 0.5s ease-in ;
}
@media (min-width:200px) and (max-width:1025px) {
    #container {
        width: 95%;
    }
}
.input_area {
    margin-top: 2%;
    height: 90%;
    width: 70%;
    display: flex;
    flex-direction: column;
}
.error {
    margin-top: 2%;
    display: none;
    font-size: 1.25em;
    color: #eb5668;
    font-family: Arial, Helvetica, sans-serif;
}
.area {
    height: 80%;
    width: 100%;
    display: flex;
    align-items: center;
}
.mg {
    margin-left: 5%;
    font-size: 2rem;
}
.mg:hover{
    opacity: 55%;
}
input {
    height: 100%;
    width: 100%;
    border: 0.2px solid rgba(128, 128, 128, 0.467);
    border-radius: 5px;
    outline: none;
    padding-left: 3%;
    font-size: 1rem;
}
.location_name {
    font-size: 3rem;
    color: #f8f9fa;
    font-family: Arial, Helvetica, sans-serif;
}
.wi {
    font-size: 7rem;
    color: #001d3d;
}
.weather_condition {
    font-size: 2rem;
    color: #f8f9fa;
    font-family: Arial, Helvetica, sans-serif;
}
.box {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    height: 20%;
    width: 100%;
}
.temperature, .humidity {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 1%;
}
.tw {
    font-size: 5rem;
    text-align: center;
}
.text {
    font-size: 1.5rem;
    text-align: left;
    color: #f8f9fa;
}
footer {
    width: 100%;
    position: absolute;
    text-align: center;
    color: #000000;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,-50%);
    font-family: Arial, Helvetica, sans-serif;










//js

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
