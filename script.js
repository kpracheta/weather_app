const apikey = "be311f79bb813e50d0aa9153207c74c0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
//const lang = document.querySelector(".language");
//const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    
}

/*if(data.weather[0].main == "Clouds"){
    searchbtn.addEventListener("click", ()=>{
        weatherIcon.src = "img/clouds.png";
    })
    
}
else if(data.weather[0].main == "Clear"){
    searchbtn.addEventListener("click", ()=>{
        weatherIcon.src = "img/clear.png";
    })
}
else if(data.weather[0].main == "Rain"){
    searchbtn.addEventListener("click", ()=>{
        weatherIcon.src = "img/rain.png";
    })
}
else if(data.weather[0].main == "Drizzle"){
    searchbtn.addEventListener("click", ()=>{
        weatherIcon.src = "img/drizzle.png";
    })
}
else if(data.weather[0].main == "Mist"){
    searchbtn.addEventListener("click", ()=>{
        weatherIcon.src = "img/mist.png";
    })
}*/

/*if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "img/clouds.png";
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "img/clear.png";
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "img/rain.png";
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "img/drizzle.png";
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "img/mist.png";
}*/

searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})

