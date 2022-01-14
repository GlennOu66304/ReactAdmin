import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Login from './views/login/Index';
import Index from './views/index/Index';
import PrivateRouter from './components/privateRouter/index';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact render={() => <Login />} path="/" />
          <PrivateRouter component={Index} path="/index" />
        </Switch>

      </HashRouter>
    )
  }
}



export default App;
