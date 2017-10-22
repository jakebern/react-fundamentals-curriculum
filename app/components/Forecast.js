var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;
var Details = require('./Details');
var Day = require('./Day');

class Forecast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      data: null
    }
    //this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
  	//add city to this so can access from other places
    this.city = queryString.parse(this.props.location.search).city;
  	api.getMyWeather(this.city).then(function(results){
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

  handleClick(weather_details){
      weather_details.city = this.city;
      this.props.history.push({
        pathname: '/details/' + this.city,
        state: weather_details
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
          <h2 className = "header">{this.city}</h2>

          {five_day_weather.map(function(listitem, num){
          //whenever create a new function, this keyword changes, so bind context 
          //as second argument her
          return (
            //.bind allows you to pass specific arguments
            //normally don't need to .bind onClick to this
            //as we already did that by setting this keyword
            //as same as one outside the function (in the second argument of the map function
            //so could write: onClick = {this.handleClick.bind(null, "hello")}

            //here - handleClick will also reference the this keyword
            //so either need to bind handleClick to this, here or in constructor ie.
            //this.handleClick = this.handleClick.bind(this);
            //which is commented out above
           
            <Day onClick = {this.handleClick.bind(this, listitem)} key = {listitem.dt} day_weather = {listitem} />
          )
            //context want map to run in.
            //will keep this keyword inside the function the same as the one outside
            //ALTERNATIVE: use an arrow function, which guarantees context is same within the functini
            //as outside the function
              //five_day_weather.map((listitem, num) => {put stuff in here})
          }, this)}


      </div>
    }
  }

module.exports = Forecast;