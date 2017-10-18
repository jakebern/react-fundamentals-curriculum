var React = require('react');
var Header = require('./Header');
var Input = require('./Input');
var Body = require('./Body');

class App extends React.Component {
  constructor(props) {
    super(props);
    //this keyword inside handleSubmit will always
    //refer to this component
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(city){
    console.log("this is my city: " + city);
  }

  render() {
    return (
      <div>
      	<Header handleSubmit = {this.handleSubmit}/>
        <Body handleSubmit = {this.handleSubmit}/>
      </div>
    )
  }
}

module.exports = App;