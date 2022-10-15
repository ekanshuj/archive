import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Checkout from './components/AddOn/Checkout';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
// import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <div className="app">
      {/* <CartProvider> */}
      <Routes>
        <Route exact path='/' element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        }>
        </Route>
        <Route path='/checkout' element={
          <>
            <Header />
            <Checkout />
            <Footer />
          </>
        } />
      </Routes>
      {/* </CartProvider> */}
    </div>
  )
}

export default App