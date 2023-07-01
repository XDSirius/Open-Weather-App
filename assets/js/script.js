

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
          //DAY1

            document.querySelector("#day1Icon").src = "https://openweathermap.org/img/wn/"+dataList[7].weather[0].icon+".png";
            var day1Temp = document.querySelector("#day1Temp");
            day1Temp.append("Temperature: "+ dataList[7].main.temp+"°");
            var day1Wind = document.querySelector("#day1Wind");
            day1Wind.append("Wind: "+dataList[7].wind.speed+" MPH ");
            var day1Hum = document.querySelector("#day1Hum");
            day1Hum.append("Humidity: "+ dataList[7].main.humidity +"% ");
            var day1Date = document.querySelector("#day1Date");
            day1Date.append(dataList[7].dt_txt);

            //DAY2

            document.querySelector("#day2Icon").src = "https://openweathermap.org/img/wn/"+dataList[14].weather[0].icon+".png";
            var day2Temp = document.querySelector("#day2Temp");
            day2Temp.append("Temperature: "+ dataList[14].main.temp+"°");
            var day2Wind = document.querySelector("#day2Wind");
            day2Wind.append("Wind: "+dataList[14].wind.speed+" MPH ");
            var day2Hum = document.querySelector("#day2Hum");
            day2Hum.append("Humidity: "+ dataList[14].main.humidity +"% ");
            var day2Date = document.querySelector("#day2Date");
            day2Date.append(dataList[14].dt_txt);

            //DAY3
;
            document.querySelector("#day3Icon").src = "https://openweathermap.org/img/wn/"+dataList[21].weather[0].icon+".png";
            var day3Temp = document.querySelector("#day3Temp");
            day3Temp.append("Temperature: "+ dataList[21].main.temp+"°");
            var day3Wind = document.querySelector("#day3Wind");
            day3Wind.append("Wind: "+dataList[21].wind.speed+" MPH ");
            var day3Hum = document.querySelector("#day3Hum");
            day3Hum.append("Humidity: "+ dataList[21].main.humidity +"% ");
            var day3Date = document.querySelector("#day3Date");
            day3Date.append(dataList[21].dt_txt);

            //DAY4

            document.querySelector("#day4Icon").src = "https://openweathermap.org/img/wn/"+dataList[7].weather[0].icon+".png";
            var day4Temp = document.querySelector("#day4Temp");
            day4Temp.append("Temperature: "+ dataList[28].main.temp+"°");
            var day4Wind = document.querySelector("#day4Wind");
            day4Wind.append("Wind: "+dataList[28].wind.speed+" MPH ");
            var day4Hum = document.querySelector("#day4Hum");
            day4Hum.append("Humidity: "+ dataList[28].main.humidity +"% ");
            var day4Date = document.querySelector("#day4Date");
            day4Date.append(dataList[28].dt_txt);

            //DAY5
            document.querySelector("#day5Icon").src = "https://openweathermap.org/img/wn/"+dataList[7].weather[0].icon+".png";
            var day5Temp = document.querySelector("#day5Temp");
            day5Temp.append("Temperature: "+ dataList[35].main.temp+"°");
            var day5Wind = document.querySelector("#day5Wind");
            day5Wind.append("Wind: "+dataList[35].wind.speed+" MPH ");
            var day5Hum = document.querySelector("#day5Hum");
            day5Hum.append("Humidity: "+ dataList[35].main.humidity +"% ");
            var day5Date = document.querySelector("#day5Date");
            day5Date.append(dataList[35].dt_txt);
            
            }

        )
        });


    }

document.getElementById("button").addEventListener("click",function(event){
    event.preventDefault();
    var cityName = document.getElementById("search-bar").value;
    checkWeather(cityName);
})
