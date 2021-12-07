import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;