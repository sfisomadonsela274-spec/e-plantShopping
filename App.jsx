import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const LandingPage = () => {
    return (
      <div className="landing-page">
        <div className="hero-content">
          <div className="company-header">
            <div className="logo-icon">🌿</div>
            <h1 className="company-name">Welcome to Paradise Nursery</h1>
            <p className="company-tagline">Bringing Nature to Your Home</p>
          </div>
          
          <p className="company-description">
            Discover your perfect green companion from our curated collection of houseplants. 
            Each plant is carefully selected and nurtured to bring life and beauty to your space. 
            We believe in sustainable practices and helping you create your own indoor paradise.
          </p>
          
          <button 
            onClick={() => setShowProducts(true)} 
            className="get-started-btn"
          >
            Get Started
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <header className="header">
            <div className="container header-container">
              <Link to="/" className="logo">
                <span className="logo-icon">🌿</span>
                <span>Paradise Nursery</span>
              </Link>
              
              <nav>
                <ul className="nav-links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/products">Plants</Link>
                  </li>
                  <li>
                    <Link to="/cart" className="cart-link">
                      🛒 Cart
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          
          <main>
            <Routes>
              <Route path="/" element={showProducts ? <ProductList /> : <LandingPage />} />
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
