var React = require('react');
var Input = require('./Input');

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
      	 <div className = "header">
            <div>
              <h2>Clever Title</h2>
            </div>
            <div>
              <Input handleSubmit = {this.handleSubmit}/>
            </div>
          </div>

          <div>
            <div className = "entry">
              <h3>Enter a City and State</h3>
              <Input handleSubmit = {this.handleSubmit}/>
            </div>
          </div>
      </div>
    )
  }
}

module.exports = App;