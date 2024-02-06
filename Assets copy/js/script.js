// GIVEN a weather dashboard with form inputs

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// TODO: Use fetch to link to 5 day forecast and geocoding apis, add eventlistener for click on submit button that will trigger the function to return the searched city's weather

var currentCity = document.getElementById("currentCity");
var searchBtn = document.getElementById("searchBtn");
var userInput = document.getElementById("cityName");
var forecast = document.getElementById("forecast");

function getApiWeather(x) {
  // grab the value for the city name and insert it into the apiurl
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
  // grab the value for the city name and insert it into the apiurl
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
      // displayCurrent(data);
    });
}

function captureData(event) {
  event.preventDefault();
  // this function needs to grab the value of the search field
  // then pass it into Getapi function
  getApiWeather(userInput.value);
  getApiForecast(userInput.value);
}

function displayCurrent(data) {
  currentCity.innerHTML = "";
  console.log(data);
  var currentCityEl = document.createElement("h2");
  currentCityEl.textContent = data.name;
  var tempEl = document.createElement("p");
  tempEl.textContent = "Temp: " + data.main.temp;
  var windEl = document.createElement("p");
  windEl.textContent = "Wind: ";
  var humidityEl = document.createElement("p");
  humidityEl.textContent = "Humidity: ";
  currentCity.append(currentCityEl, tempEl, windEl, humidityEl);
}

searchBtn.addEventListener("click", captureData);

// WHEN I search for a city, that city is added to the search history
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// Geocoding API: http://api.openweathermap.org/geo/1.0/direct?q=&limit=5&appid={0e0b7c450f9c8931ca8495ab3a500c20}
