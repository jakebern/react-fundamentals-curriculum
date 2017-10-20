var React = require('react');
var Input = require('./Input');

function onSubmit(props, city) {
    props.history.push({
      pathname: 'forecast',
      search: '?city=' + city
    });
  }

function Home(props) {
  return (
    <div>
       <div className = "header">
          <div>
            <h2>Clever Title</h2>
          </div>
          <div>
            <Input handleSubmit = {
              //passes in current props to function to call when needed
              onSubmit.bind(null, props)
              }
            />
          </div>
        </div>

        <div>
          <div className = "entry">
            <h3>Enter a City and State</h3>

            <Input handleSubmit = {
              //passes in current props to function to call when needed
              onSubmit.bind(null, props)
            }/>

          </div>
        </div>
      </div>
    )
  }

module.exports = Home;