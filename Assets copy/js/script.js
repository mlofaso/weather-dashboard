// GIVEN a weather dashboard with form inputs

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// TODO: Use fetch to link to 5 day forecast and geocoding apis, add eventlistener for click on submit button that will trigger the function to return the searched city's weather

var currentCity = document.getElementById("current-city");

function getApi() {
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";
}

// WHEN I search for a city, that city is added to the search history
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
