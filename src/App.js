import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { authentication } from './firebase/firebase.utils';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }

  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = authentication.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;