import React from 'react';
import './App.css';
import Homepage from './Component/Homepage/homepage.component'
import { Switch, Route } from 'react-router-dom'
import ShopPage from './Component/ShopPage/ShopPage.component'
import AuthenticationPage from './Pages/Authentication/authentication.component'
import Header from './Component/header/header.component'


class App extends React.Component {

render(){
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={ Homepage } />
          <Route path='/shop' component={ ShopPage } />  
          <Route exact path='/Signin' component={ AuthenticationPage } />  
        </Switch>
    </div>
  );
}
}

export default App;
