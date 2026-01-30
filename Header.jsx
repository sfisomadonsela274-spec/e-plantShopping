import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart, Home, Leaf, Package } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const cart = useSelector((state) => state.cart);
  
  const isActive = (path) => location.pathname === path ? 'active' : '';
  
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <Leaf size={28} />
          <span>Paradise Nursery</span>
        </Link>
        
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/" className={isActive('/')}>
                <Home size={18} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/products" className={isActive('/products')}>
                <Package size={18} />
                <span>Plants</span>
              </Link>
            </li>
            <li>
              <Link to="/cart" className={isActive('/cart')}>
                <div className="cart-icon">
                  <ShoppingCart size={24} />
                  {cart.totalQuantity > 0 && (
                    <span className="cart-count">{cart.totalQuantity}</span>
                  )}
                </div>
                <span>Cart</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
