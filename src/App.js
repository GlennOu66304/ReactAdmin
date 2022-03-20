import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Login from './views/login/Index';
import Index from './views/index/Index';
import PrivateRouter from './components/privateRouter/index';

// react=redux 
import Store from './store/index.js';
import { Provider } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // redux provider and store
      <Provider store={Store}> 

        {/* Hash Router manage the router */}
        <HashRouter>
          <Switch>
            {/* Login router */}
            <Route exact render={() => <Login />} path="/" />
            
            {/* router after login */}
            <PrivateRouter component={Index} path="/index" />
          </Switch>

        </HashRouter>

      </Provider>
    )
  }
}



export default App;
