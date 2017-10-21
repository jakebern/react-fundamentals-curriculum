var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;

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
    if (this.state.data){
      
      //make sure sorted by date
      var sorted_results = this.state.data.list.sort (function(a,b){
        return a.dt - b.dt
      })

      //take first reading from 5 days
      var five_day_weather = sorted_results.filter(function (day, number) {
        var past_num = ((number !=0) ? number-1 : 0);
        return day.dt_txt.substring(0,10) != sorted_results[past_num].dt_txt.substring(0,10); 
      }.bind(this)).slice(0,5)
    }
   
    return this.state.loading === true 
      ? <div> Loading </div>
      : <div>
          <h2 className = "header">{this.state.data.city.name}</h2>

          {five_day_weather.map(function(listitem, num){
          return (
            <Link key = {num} to = '/'>
              <div className = 'date'>
                <h2>{listitem.weather[0].main}</h2>
                <p>{listitem.dt_txt.substring(0, 10)}</p>
              </div>
            </Link>
            )
          })}

      </div>
    }
  }

module.exports = Forecast;