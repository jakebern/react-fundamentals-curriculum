var axios = require('axios');

var id = "1806ff6ef1ea14fd9714655df80b3ecd";
var base_url = "http://api.openweathermap.org/data/2.5/";

module.exports = {
	getMyWeather: function(city) {
		return axios.get(base_url + "forecast?q="+city+"&type=accurate&APPID=" + id + "&cnt=5")
    .then(function(response){
      return response.data;
    });
	}
}