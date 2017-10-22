var React = require('react');

class Input extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: ''
    }
    //guarantees this keyword in function refers to the component itself
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  
  handleSubmit (event){
    event.preventDefault(); //if don't do this, page will force reload/submit
    this.props.handleSubmit(this.state.city);
  }

  handleChange(event){
    var value = event.target.value;
    this.setState(function(){
      return {
        city: value
      }
    })
  }

  render() {
    return (
      <div>      		
      		<form onSubmit = {this.handleSubmit}>
            <input
        			id='city'
        			placeholder = "St. George, Utah"
              value = {this.state.city}
              onChange = {this.handleChange}
        		/>
        		<button type="submit">Get Weather</button>
          </form>
      </div>

    )
  }
}

module.exports = Input;