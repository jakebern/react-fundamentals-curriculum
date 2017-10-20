var React = require('react');
var Input = require('./Input');

class Home extends React.Component {
  handleSubmit(city){
    console.log("blah");
  };

  render() {
    return (
      <div>
         <div className = "header">
            <div>
              <h2>Clever Title</h2>
            </div>
            <div>
              <Input handleSubmit = {this.handleSubmit.bind(this)}/>
            </div>
          </div>

          <div>
            <div className = "entry">
              <h3>Enter a City and State</h3>
              <Input handleSubmit = {this.handleSubmit.bind(this)}/>
            </div>
          </div>

      </div>

    )
  }
}

module.exports = Home;