// GIVEN a weather dashboard with form inputs

// WHEN I search for a city
// THEN I am presented with future conditions for that city
// WHEN I view current weather conditions for that city
// THEN I am presented with the date and an icon representation of weather conditions
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

var currentCity = document.getElementById("currentCity");
var searchBtn = document.getElementById("searchBtn");
var userInput = document.getElementById("cityName");
var forecast = document.getElementById("forecast");
var dayOne = document.getElementById("dayOne");

function getApiWeather(x) {
  console.log(x);
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    x +
    "&appid=0e0b7c450f9c8931ca8495ab3a500c20&units=imperial";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayCurrent(data);
    });
}

function getApiForecast(x) {
  console.log(x);
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    x +
    "&appid=0e0b7c450f9c8931ca8495ab3a500c20&units=imperial";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayForecast(data);
    });
}

function captureData(event) {
  event.preventDefault();
  getApiWeather(userInput.value);
  getApiForecast(userInput.value);
}

function displayCurrent(data) {
  console.log(data);
  currentCity.innerHTML = "";
  var currentCityEl = document.createElement("h2");
  currentCityEl.textContent = data.name;
  var tempEl = document.createElement("p");
  tempEl.textContent = "Temp: " + data.main.temp + "°F";
  var windEl = document.createElement("p");
  windEl.textContent = "Wind: " + data.wind.speed + " MPH";
  var humidityEl = document.createElement("p");
  humidityEl.textContent = "Humidity: " + data.main.humidity + "%";
  currentCity.append(currentCityEl, tempEl, windEl, humidityEl);
}

function displayForecast(data) {
  console.log(data);
  forecast.innerHTML = "";
  var forecastTitleEl = document.createElement("h3");
  forecastTitleEl.textContent = "5 Day Forecast:";
  var dayOneEl = document.createElement("section");
  dayOneEl.textContent = data.list[4].dt_txt[0];
  forecast.append(forecastTitleEl);
}

searchBtn.addEventListener("click", captureData);

// WHEN I search for a city, that city is added to the search history
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
