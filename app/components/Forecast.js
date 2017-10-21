var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');

class Forecast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      data: null
    }
  }
  componentDidMount(){
  	var city = queryString.parse(this.props.location.search).city;
  	api.getMyWeather(city).then(function(results){
			console.log(results);
      this.setState(function(){
        return {
          loading: false,
          data: results
        }
      })
    }.bind(this))
  	.catch(function(error){
  		console.log("This is the error: " + error)
  	})
  }

  render() {
    return this.state.loading === true 
    ? <div> Loading </div>
    : <div> 
      My daily forecast goes here.
    </div>
  }
}

module.exports = Forecast;