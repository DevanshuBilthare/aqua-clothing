import React from 'react';
import './App.css';
import Homepage from './Component/Homepage/homepage.component'
import { Route } from 'react-router-dom'

const Hats = () => (
  <h1>HATS</h1>
)

class App extends React.Component {



render(){
  return (
    <div className="App">
      <Route exact path='/' component={ Homepage } />
      <Route exact path='/shop/hats' component={ Hats } />
      {/* <Homepage /> */}
    </div>
  );
}
}

export default App;
