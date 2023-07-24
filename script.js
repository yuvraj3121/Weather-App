const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "64befbd665msh7d4a8ec5174498ap1d5afajsne472e9d2f1fb",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.log(err));
};

const getWeatherM = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pctM.innerHTML = response.cloud_pct;
      tempM.innerHTML = response.temp;
      humidityM.innerHTML = response.humidity;
      min_tempM.innerHTML = response.min_temp;
      max_tempM.innerHTML = response.max_temp;
      wind_speedM.innerHTML = response.wind_speed;
      wind_degreesM.innerHTML = response.wind_degrees;
      sunriseM.innerHTML = response.sunrise;
      sunsetM.innerHTML = response.sunset;
    })
    .catch((err) => console.log(err));
};

const getWeatherB = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pctB.innerHTML = response.cloud_pct;
      tempB.innerHTML = response.temp;
      humidityB.innerHTML = response.humidity;
      min_tempB.innerHTML = response.min_temp;
      max_tempB.innerHTML = response.max_temp;
      wind_speedB.innerHTML = response.wind_speed;
      wind_degreesB.innerHTML = response.wind_degrees;
      sunriseB.innerHTML = response.sunrise;
      sunsetB.innerHTML = response.sunset;
    })
    .catch((err) => console.log(err));
};

const getWeatherK = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pctK.innerHTML = response.cloud_pct;
      tempK.innerHTML = response.temp;
      humidityK.innerHTML = response.humidity;
      min_tempK.innerHTML = response.min_temp;
      max_tempK.innerHTML = response.max_temp;
      wind_speedK.innerHTML = response.wind_speed;
      wind_degreesK.innerHTML = response.wind_degrees;
      sunriseK.innerHTML = response.sunrise;
      sunsetK.innerHTML = response.sunset;
    })
    .catch((err) => console.log(err));
};

const getWeatherL = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pctL.innerHTML = response.cloud_pct;
      tempL.innerHTML = response.temp;
      humidityL.innerHTML = response.humidity;
      min_tempL.innerHTML = response.min_temp;
      max_tempL.innerHTML = response.max_temp;
      wind_speedL.innerHTML = response.wind_speed;
      wind_degreesL.innerHTML = response.wind_degrees;
      sunriseL.innerHTML = response.sunrise;
      sunsetL.innerHTML = response.sunset;
    })
    .catch((err) => console.log(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeatherM("Mumbai");
getWeatherB("Bangalore");
getWeatherK("Kolkata");
getWeatherL("Lucknow");
getWeather("Delhi");
