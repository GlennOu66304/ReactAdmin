import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/Login/Index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact element={<Login />} path="/" />
        </Routes>

      </BrowserRouter>
    )
  }
}



export default App;
