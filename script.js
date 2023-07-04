const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1beed93c0fmshbd2df78b56e3069p1eade2jsn602ee7d29d9f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{   
cityName.innerHTML = city
const response = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options).then(response => response.json()).then((response) => {
	console.log(response)
	cloud_pct.innerHTML = response.cloud_pct
	temp.innerHTML = response.temp
	humidity.innerHTML = response.humidity
	min_temp.innerHTML = response.min_temp
	max_temp.innerHTML = response.max_temp
	wind_speed.innerHTML = response.wind_speed
	wind_degrees.innerHTML = response.wind_degrees
	feels_like.innerHTML = response.feels_like 
}

)};

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value);
})
getWeather("Delhi")