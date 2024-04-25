const apiKey = "771443940d1e29b99e9ee34e45f2120c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        // console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "weatherImages/clouds.png";

        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "weatherImages/clear.png";

        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "weatherImages/rain.png";

        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "weatherImages/drizzle.png";

        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "weatherImages/mist.png";

        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";





    }
}

//     const data=await response.json();

//     // console.log(data);

//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+ "°C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

//     if(data.weather[0].main == "Clouds"){
//         weatherIcon.src ="weatherImages/clouds.png" ;

//     }else if(data.weather[0].main == "Clear"){
//         weatherIcon.src ="weatherImages/clear.png" ;

//     }else if(data.weather[0].main == "Rain"){
//         weatherIcon.src ="weatherImages/rain.png" ;

//     }else if(data.weather[0].main == "Drizzle"){
//         weatherIcon.src ="weatherImages/drizzle.png" ;

//     }else if(data.weather[0].main == "Mist"){
//         weatherIcon.src ="weatherImages/mist.png" ;

//     }

//     document.querySelector(".weather").style.display = "block";




// }

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})

// https://api.openweathermap.org/data/2.5/weather?q=nagpur&appid=771443940d1e29b99e9ee34e45f2120c