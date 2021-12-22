import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './views/Login/Index';
import Index from './views/index/Index';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact component={Login} path="/" />
          <Route exact component={Index} path="/index" />
        </Switch>

      </BrowserRouter>
    )
  }
}



export default App;
