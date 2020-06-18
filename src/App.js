import React from 'react';
import './App.css';
import Homepage from './Component/Homepage/homepage.component'
import { Switch, Route } from 'react-router-dom'
import ShopPage from './Component/ShopPage/ShopPage.component'
import AuthenticationPage from './Pages/Authentication/authentication.component'
import Header from './Component/header/header.component'
import { auth } from './firebase/firebase.utils'


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentDidUnmount() {
    this.unsubscribeFromAuth();
  }

render(){
  return (
    <div className="App">
        <Header currentUser ={this.state.currentUser} />
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
