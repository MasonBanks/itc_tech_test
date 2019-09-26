import React from 'react';
// import * as Material from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom'

import Appbar from './components/appbar/Appbar'
import Content from './components/content/Content'

function App() {
  return (
    <Router>
      <div className="App">
        <Appbar />
        <Content />
      </div>
    </ Router>
  );
}

export default App;
