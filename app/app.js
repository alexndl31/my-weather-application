function displayTemp(response) {
  let tempElement = document.querySelector(".current-temp-value");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#searching");
  let city = searchInputElement.value;

  let apiKey = "4t7d303d7c1ea2908b8dfea4coaff2b4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

function getCurrentDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formatDay = days[day];
  return `${formatDay} ${hours}:${minutes}`;
}
let searchForm = document.querySelector("#search-engine");
searchForm.addEventListener("submit", search);
let currentDayElement = document.querySelector("#current-day");
let currentDay = new Date();
currentDayElement.innerHTML = getCurrentDate(currentDay);
