import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './views/Home.js';
import About from './views/About.js';
import News from './views/News.js';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="test">
        <h1>adsfase</h1>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </BrowserRouter>

      </div>

    )
  }
}



export default App;
