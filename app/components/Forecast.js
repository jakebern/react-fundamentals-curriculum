var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');

class Forecast extends React.Component {
  componentDidMount(){
  	var queryparam = queryString.parse(this.props.location.search);
  	api.getMyWeather(queryparam.city).then(function(results){
  		console.log(results);
  	})
  }
  render() {

    return (
      <div className = "header">
        This is the forecast
      </div>

    )
  }
}

module.exports = Forecast;