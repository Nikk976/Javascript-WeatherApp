const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a84f98d803msh73186bb422ee4ccp14b822jsn5c3c3a66f673",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const toFirstUpperCase = (str)=>{
    return str.charAt(0).toUpperCase() + str.substr(1);
}
const getWeather = (city)=>{
  fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${toFirstUpperCase(city)}`, options)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      // cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      cityWeather.innerHTML = `${toFirstUpperCase(city)} Weather`;
    })
    .catch((err) => {
      console.log(err);
    });
}


  submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let city = cityName.value;
    getWeather(city);
    cityName.value = '';
  })
  getWeather('Delhi');


  const getChandigarhWeather = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chandigarh',options).then((response)=>{
      return response.json();
    }).then((response)=>{
      let tr1 = document.getElementById('tr1');
      let tableData = tr1.cells;
      tableData = Array.from(tableData);
      console.log(tableData);
      tableData[1].innerHTML = response.cloud_pct
      tableData[2].innerHTML = response.feels_like
      tableData[3].innerHTML = response.humidity
      tableData[4].innerHTML = response.max_temp
      tableData[5].innerHTML = response.min_temp
      tableData[6].innerHTML = response.sunrise
      tableData[7].innerHTML = response.sunset
      tableData[8].innerHTML = response.temp
      tableData[9].innerHTML = response.wind_degrees
      tableData[10].innerHTML = response.wind_speed
    })
  }
  const getMumbaiWeather = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai',options).then((response)=>{
      return response.json();
    }).then((response)=>{
      let tr2 = document.getElementById('tr2');
      let tableData = tr2.cells;
      tableData = Array.from(tableData);
      console.log(tableData);
      tableData[1].innerHTML = response.cloud_pct
      tableData[2].innerHTML = response.feels_like
      tableData[3].innerHTML = response.humidity
      tableData[4].innerHTML = response.max_temp
      tableData[5].innerHTML = response.min_temp
      tableData[6].innerHTML = response.sunrise
      tableData[7].innerHTML = response.sunset
      tableData[8].innerHTML = response.temp
      tableData[9].innerHTML = response.wind_degrees
      tableData[10].innerHTML = response.wind_speed
    })
  }
  const getChennaiWeather = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai',options).then((response)=>{
      return response.json();
    }).then((response)=>{
      let tr3 = document.getElementById('tr3');
      let tableData = tr3.cells;
      tableData = Array.from(tableData);
      console.log(tableData);
      tableData[1].innerHTML = response.cloud_pct
      tableData[2].innerHTML = response.feels_like
      tableData[3].innerHTML = response.humidity
      tableData[4].innerHTML = response.max_temp
      tableData[5].innerHTML = response.min_temp
      tableData[6].innerHTML = response.sunrise
      tableData[7].innerHTML = response.sunset
      tableData[8].innerHTML = response.temp
      tableData[9].innerHTML = response.wind_degrees
      tableData[10].innerHTML = response.wind_speed
    })
  }
  const getBengaluruWeather = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bengaluru',options).then((response)=>{
      return response.json();
    }).then((response)=>{
      let tr4 = document.getElementById('tr4');
      let tableData = tr4.cells;
      tableData = Array.from(tableData);
      console.log(tableData);
      tableData[1].innerHTML = response.cloud_pct
      tableData[2].innerHTML = response.feels_like
      tableData[3].innerHTML = response.humidity
      tableData[4].innerHTML = response.max_temp
      tableData[5].innerHTML = response.min_temp
      tableData[6].innerHTML = response.sunrise
      tableData[7].innerHTML = response.sunset
      tableData[8].innerHTML = response.temp
      tableData[9].innerHTML = response.wind_degrees
      tableData[10].innerHTML = response.wind_speed
    })
  }

  getChandigarhWeather();
  getMumbaiWeather();
  getChennaiWeather();
  getBengaluruWeather();