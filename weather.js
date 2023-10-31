const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '111a0f7581msh11ed78265c49ad3p1ea2eajsn9bf71ee2a64c',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const cityName = document.querySelector('.cityName');
const temp = document.querySelector('#temp'); // Add corresponding elements
const feels_like = document.querySelector('#feels_like'); // Add corresponding elements
const humidity = document.querySelector('#humidity'); // Add corresponding elements
const humidity2 = document.querySelector('#humidity2'); // Add corresponding elements
const min_temp = document.querySelector('#min_temp'); // Add corresponding elements
const max_temp = document.querySelector('#max_temp'); // Add corresponding elements
const wind_speed = document.querySelector('#wind_speed'); // Add corresponding elements
const wind2 = document.querySelector('#wind2'); // Add corresponding elements
const wind_degrees = document.querySelector('#wind_degrees'); // Add corresponding elements
const sunrise = document.querySelector('#sunrise'); // Add corresponding elements
const sunset = document.querySelector('#sunset'); // Add corresponding elements
const temp1 = document.querySelector('#temp1'); // Add corresponding elements
const tempPur = document.querySelector('#tempPur'); // Add corresponding`` elements
const cityInput = document.querySelector('#city');


const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind2.innerHTML = response.wind_speed + " Km/h";
      wind_degrees.innerHTML = response.wind_degrees;
      const sunriseTime = new Date(response.sunrise * 1000); // Convert to milliseconds
  const sunsetTime = new Date(response.sunset * 1000);
  sunrise.innerHTML = sunriseTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  sunset.innerHTML = sunsetTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
      
      temp1.innerHTML = response.temp + "C";
    })
    .catch(err => console.error(err));

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then(response => response.json())
    .then(response => {
      tempPur.innerHTML = response.temp;
      feels_likePur.innerHTML = response.feels_like;
      humidityPur.innerHTML = response.humidity;
      min_tempPur.innerHTML = response.min_temp;
      max_tempPur.innerHTML = response.max_temp;
      wind_speedPur.innerHTML = response.wind_speed;
      wind_degreesPur.innerHTML = response.wind_degrees;
      const sunriseTimePur = new Date(response.sunrise * 1000); // Convert to milliseconds
      const sunsetTimePur = new Date(response.sunset * 1000);
      sunrisePur.innerHTML = sunriseTimePur.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      sunsetPur.innerHTML = sunsetTimePur.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    })
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jalandhar', options)
    .then(response => response.json())
    .then(response => {
      tempBan.innerHTML = response.temp;
      feels_likeBan.innerHTML = response.feels_like;
      humidityBan.innerHTML = response.humidity;
      min_tempBan.innerHTML = response.min_temp;
      max_tempBan.innerHTML = response.max_temp;
      wind_speedBan.innerHTML = response.wind_speed;
      wind_degreesBan.innerHTML = response.wind_degrees;
      const sunriseTimeBan = new Date(response.sunrise * 1000); // Convert to milliseconds
      const sunsetTimeBan = new Date(response.sunset * 1000);
      sunriseBan.innerHTML = sunriseTimeBan.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      sunsetBan.innerHTML = sunsetTimeBan.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    })
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
    .then(response => response.json())
    .then(response => {
      tempkol.innerHTML = response.temp;
      feels_likekol.innerHTML = response.feels_like;
      humiditykol.innerHTML = response.humidity;
      min_tempkol.innerHTML = response.min_temp;
      max_tempkol.innerHTML = response.max_temp;
      wind_speedkol.innerHTML = response.wind_speed;
      wind_degreeskol.innerHTML = response.wind_degrees;
      const sunriseTimekol = new Date(response.sunrise * 1000); // Convert to milliseconds
      const sunsetTimekol = new Date(response.sunset * 1000);
      sunrisekol.innerHTML = sunriseTimekol.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      sunsetkol.innerHTML = sunsetTimekol.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    })
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Asansol', options)
    .then(response => response.json())
    .then(response => {
      tempasa.innerHTML = response.temp;
      feels_likeasa.innerHTML = response.feels_like;
      humidityasa.innerHTML = response.humidity;
      min_tempasa.innerHTML = response.min_temp;
      max_tempasa.innerHTML = response.max_temp;
      wind_speedasa.innerHTML = response.wind_speed;
      wind_degreesasa.innerHTML = response.wind_degrees;
      const sunriseTimeasa = new Date(response.sunrise * 1000); // Convert to milliseconds
      const sunsetTimeasa = new Date(response.sunset * 1000);
      sunriseasa.innerHTML = sunriseTimeasa.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      sunsetasa.innerHTML = sunsetTimeasa.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    })
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Phagwara', options)
    .then(response => response.json())
    .then(response => {
      tempphag.innerHTML = response.temp;
      feels_likephag.innerHTML = response.feels_like;
      humidityphag.innerHTML = response.humidity;
      min_tempphag.innerHTML = response.min_temp;
      max_tempphag.innerHTML = response.max_temp;
      wind_speedphag.innerHTML = response.wind_speed;
      wind_degreesphag.innerHTML = response.wind_degrees;
      const sunriseTimephag = new Date(response.sunrise * 1000); // Convert to milliseconds
      const sunsetTimephag = new Date(response.sunset * 1000);
      sunrisephag.innerHTML = sunriseTimephag.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      sunsetphag.innerHTML = sunsetTimephag.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    })
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Haryana', options)
    .then(response => response.json())
    .then(response => {
      temphar.innerHTML = response.temp;
      feels_likehar.innerHTML = response.feels_like;
      humidityhar.innerHTML = response.humidity;
      min_temphar.innerHTML = response.min_temp;
      max_temphar.innerHTML = response.max_temp;
      wind_speedhar.innerHTML = response.wind_speed;
      wind_degreeshar.innerHTML = response.wind_degrees;
      const sunriseTimehar = new Date(response.sunrise * 1000); // Convert to milliseconds
      const sunsetTimehar = new Date(response.sunset * 1000);
      sunrisehar.innerHTML = sunriseTimehar.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      sunsethar.innerHTML = sunsetTimehar.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    })
    
    .catch(err => console.error(err));
};

const submit = document.querySelector('#submit');
submit.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  getWeather(cityInput.value);
});

// Fetch initial weather data for "Delhi"
getWeather("Delhi");
