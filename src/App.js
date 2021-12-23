import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './views/Login/Index';
import Index from './views/index/Index';
import PrivateRouter from './components/privateRouter/index';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact render={() => <Login />} path="/" />
          <PrivateRouter exact component={Index} path="/index" />
        </Switch>

      </BrowserRouter>
    )
  }
}



export default App;
