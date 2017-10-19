var axios = require('axios');

var id = "1806ff6ef1ea14fd9714655df80b3ecd";

module.exports = {
	getMyWeather: function(city) {
		return axios.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&type=accurate&APPID=" + id)
    .then(function(response){
      return response.data;
    });
	}
}