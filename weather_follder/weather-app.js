let cityInput = document.getElementById("cityInput");
    let searchBtn = document.getElementById("searchBtn");
    let weatherResult = document.getElementById("weatherResult");

    
    async function getWeather()  {
      let city = cityInput.value.trim();

      if(city === ""){
        weatherResult.innerHTML = `
        <p class ="error"> Please enter a city </p>`;
        return;
      }
      weatherResult.innerHTML = `<p> Searching for ${city}</p>`;
      
    try{
       // STEP 1: Find the city's coordinates
      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en`;

      console.log(geoUrl);
      const geoResponse = await fetch(geoUrl);

      if(!geoResponse.ok){
        const errorText = await geoResponse.text();
        console.log("API ERROR:", errorText)
        throw new Error("Unable to find location");
      }
     const geoData = await geoResponse.json();

     // check if city exists
     if(!geoData.results || geoData.results.length === 0){
      weather.innerHTML = `
      <p class="error"> City not found. Please try another city.</p>
      `;
    return;
    }

    // get location info
    const location = geoData.results[0];
    const latitude = location.latitude;
    const longitude = location.longitude;
    const cityName = location.name;
    const country = location.country;

    // step 2: Get weather using coordinate
    const weatherUrl = 
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&timezone=auto`;

    
    const weatherResponse = await fetch(weatherUrl);
    
    if(!weatherResponse.ok){
      throw new Error("Unable to fetch weather");
    }
    const weatherData = await weatherResponse.json();

    // step 3: Get current data
    const current = weatherData.current;
    const temperature = current.temperature_2m;
    const humidity = current.relative_humidity_2m;
    const windSpeed = current.wind_speed_10m;
    const weatherCode = current.weather_code;

    // covert weather code into desription 
    const description = getWeatherDescription(weatherCode) 

    // Display everything
    weatherResult.innerHTML  = `
    <div class="weather-city">
      ${cityName}, ${country}
    </div>
    
     <div class="temperature">
        ${temperature}°C
      </div>

      <div class="weather-info">
        ${description}
      </div>

      <div class="weather-info">
        💧 Humidity: ${humidity}%
      </div>

      <div class="weather-info">
        💨 Wind: ${windSpeed} km/h
      </div>
    `;
    }catch(error){
      console.error(error);

      weatherResult.innerHTML =  `
        <p class="error"> Something went wrong. Please try again.</p> 
      `;
    }finally{
      console.log("Request finished")
    }
  }

  // weather code function 
  function getWeatherDescription(code){

    if (code === 0) {
      return "☀️ Clear sky";
    }

    if (code >= 1 && code <= 3) {
      return "⛅ Partly cloudy";
    }

    if (code >= 45 && code <= 48) {
      return "🌫️ Foggy";
    }

    if (code >= 51 && code <= 57) {
      return "🌦️ Drizzle";
    }

    if (code >= 61 && code <= 67) {
      return "🌧️ Rain";
    }

    if (code >= 71 && code <= 77) {
      return "❄️ Snow";
    }

    if (code >= 80 && code <= 82) {
      return "🌧️ Rain showers";
    }

    if (code >= 95 && code <= 99) {
      return "⛈️ Thunderstorm";
    }

    return "🌤️ Unknown weather";
  }
       searchBtn.addEventListener("click", getWeather);

    cityInput.addEventListener("keydown", (event) => {
      if(event.key === "Enter"){
        getWeather();
      }
    });