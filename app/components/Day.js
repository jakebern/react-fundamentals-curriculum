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

           // <Details onClick = {this.handleClick.bind(this, listitem)}/> 
            // <Link key = {num} to = {'/details/'+ queryString.parse(this.props.location.search).city}>
            //   <div className = 'date'>
            //     <h2>{listitem.weather[0].main}</h2>
            //     <p>{listitem.dt_txt.substring(0, 10)}</p>
            //   </div>
            // </Link>