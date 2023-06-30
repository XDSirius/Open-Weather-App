

const apiKey = '0ed334a1b75961ee558dfd6ad924e663';


//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
function checkWeather(city){
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+ apiKey+'&units=imperial';

        fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
        console.log(data);
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#date").innerHTML = new Date(data.dt).toLocaleString(data.timezone);
        document.querySelector("#temperature").innerHTML = data.main.temp;
        document.querySelector("#icon").src = "https://openweathermap.org/img/wn/"+data.weather[0].icon+".png";
        document.querySelector("#wind").innerHTML = "Wind Speed: "+data.wind.speed +" MPH";
        document.querySelector("#humidity").innerHTML ="Humidity: "+ data.main.humidity +" %";

        const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+ apiKey+'&units=imperial';
        fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for(let i =7; i<data.list.length;i+=8){
                var
            }
        })
        });
    }

document.getElementById("button").addEventListener("click",function(event){
    event.preventDefault();
    var cityName = document.getElementById("search-bar").value;
    checkWeather(cityName);
})
