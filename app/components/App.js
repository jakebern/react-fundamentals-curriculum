var React = require('react');
var Header = require('./Header');
var Input = require('./Input');
var Body = require('./Body');

class App extends React.Component {
  render() {
    return (
      <div>
      	<Header />
        <Body />
      </div>
    )
  }
}

module.exports = App;