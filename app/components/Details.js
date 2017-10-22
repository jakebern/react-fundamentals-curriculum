var React = require('react');

function Details(props){
	//how you access props set via props.history.push
	var my_state = props.location.state;
  return (
  	<div>
  		{JSON.stringify(my_state.main)}
  	</div>
  )
}

module.exports = Details;