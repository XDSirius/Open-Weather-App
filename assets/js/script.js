

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
        
        document.querySelector("#icon").src = "https://openweathermap.org/img/wn/"+data.weather[0].icon+".png";
        document.querySelector("#temperature").innerHTML = "Temperature: "+data.main.temp +"°";
        document.querySelector("#wind").innerHTML = "Wind Speed: "+data.wind.speed +" MPH";
        document.querySelector("#humidity").innerHTML ="Humidity: "+ data.main.humidity +" %";

        const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+ apiKey+'&units=imperial';
        fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let dataList = data.list;
           // for(let i =7; i<data.list.length;i+=8){
             //   var element = document.querySelector("#forecast");
                /* var data = element.append(data.list[7].main.temp); */
            //    console.log(dataList[i].main.temp);
          //      element.append(dataList[i].main.temp);
            var day1 = document.querySelector("#day1");
            document.querySelector("#day1Icon").src = "https://openweathermap.org/img/wn/"+dataList[7].weather[0].icon+".png";
            var day1Temp = document.querySelector("#day1Temp");
            day1Temp.append("Temperature: "+ dataList[7].main.temp+"°");
            var day1Wind = document.querySelector("#day1Wind");
            day1Wind.append("Wind: "+dataList[7].wind.speed+" MPH ");
            var day1Hum = document.querySelector("#day1Hum");
            day1Hum.append("Humidity: "+ dataList[7].main.humidity +"% ");
            var day1Date = document.querySelector("#day1Date");
            day1Date.append(dataList[7].dt_txt);
            
            }

        )
        });


    }

document.getElementById("button").addEventListener("click",function(event){
    event.preventDefault();
    var cityName = document.getElementById("search-bar").value;
    checkWeather(cityName);
})
