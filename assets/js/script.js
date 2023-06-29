console.log("hi");

const apiKey = '0ed334a1b75961ee558dfd6ad924e663';

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=cincinnati&appid='+ apiKey;
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
function checkWeather(){
        fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
        console.log(data);
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#date").innerHTML = new Date().toLocaleString(data.timezone);
        });
    }

checkWeather();