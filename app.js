const api_key = "98617d2b4bfdf593950d5c06d82b76fc";
const api_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

// const search_input = document.querySelector(".search input");
// const search_btn = document.querySelector(".search button");

const get_weather_data = async (city) => {
  await fetch(api_url + city + `&appid=${api_key}`)
    .then((result) => result.json())
    .then((json) => {
      document.querySelector(".temp").innerHTML =
        Math.round(json.main.temp) + "°C";
      document.querySelector(".city").innerHTML = json.name;
      document.querySelector(".humidity").innerHTML = json.main.humidity + "%";
      document.querySelector(".wind").innerHTML = json.wind.speed + " km/h";

      // console.log(json);
      if (json.weather[0].main == "Rain")
        document.querySelector(".weather .weather-icon i").className =
          "fa-solid fa-cloud-showers-heavy";
      if (json.weather[0].main == "Clear")
        document.querySelector(".weather .weather-icon i").className =
          "fa-solid fa-sun";
      if (json.weather[0].main == "Clouds")
        document.querySelector(".weather .weather-icon i").className =
          "fa-solid fa-cloud";
      if (json.weather[0].main == "Drizzle")
        document.querySelector(".weather .weather-icon i").className =
          "fa-solid fa-cloud-sun-rain";
      if (json.weather[0].main == "Mist")
        document.querySelector(".weather .weather-icon i").className =
          "fa-solid fa-cloud-sun";
    })
    .catch((err) => {
      console.log(err);
    });
};
// search_btn.addEventListener("click", () => {
//     get_weather_data(search_input.value)
// });
get_weather_data("ciro");
