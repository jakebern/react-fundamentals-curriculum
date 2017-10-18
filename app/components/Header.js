var React = require('react');
var Input = require('./Input');

class Header extends React.Component {
  render() {
    return (
      <div className = "header">
        <div>
          <h2>Clever Title</h2>
        </div>
        <div>
          <Input />
        </div>

      </div>

    )
  }
}

module.exports = Header;