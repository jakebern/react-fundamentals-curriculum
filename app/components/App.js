var React = require('react');
var Input = require('./Input');
var Home = require('./Home');
var Forecast = require('./Forecast');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
  render() {
    return (
    <Router>
       <div className = 'container'> 
          <Switch>
            <Route exact path = '/' component = {Home} />
            <Route path='/forecast' component={Forecast} />

            //will only be shown if no others paths active
            <Route render = {function(){
              return (<p>Not found</p>)
            }} />
          </Switch>
       </div>
      </Router>
    )
  }
}

module.exports = App;