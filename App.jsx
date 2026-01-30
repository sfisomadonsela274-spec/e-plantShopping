import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
