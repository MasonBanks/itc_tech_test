import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Appbar from './components/appbar/Appbar'
import Content from './components/content/Content'
import Foot from './components/footer/Foot'

function App() {
  return (
    <Router>
      <div className="App">
        <Appbar />
        <Content />
      </div>
      <Foot />
    </ Router>
  );
}

export default App;
