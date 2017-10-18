var React = require('react');
var Input = require('./Input');

class Body extends React.Component {

  render() {
    return (
      <div>
      	<div className = "entry">
      		<h3>Enter a City and State</h3>
          <Input handleSubmit = {this.props.handleSubmit}/>
      	</div>
      </div>
    )
  }
}

module.exports = Body;