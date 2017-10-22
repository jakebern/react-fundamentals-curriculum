var React = require('react');

function Day(props){
	const weather = props.day_weather;
  return (
    <div className = 'date' onClick = {props.onClick}>
      <h2>{weather.weather[0].description}</h2>
      <p>{weather.dt_txt.substring(0, 10)}</p>
    </div>
  )
}

module.exports = Day;