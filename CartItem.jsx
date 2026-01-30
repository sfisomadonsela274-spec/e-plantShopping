import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag, CreditCard } from 'lucide-react';
import { updateQuantity, deleteItem } from '../store/cartSlice';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  
  const handleCheckout = () => {
    alert('Checkout feature coming soon!');
  };
  
  const calculateTotalAmount = () => {
    return cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const getTotalItems = () => {
    return cart.items.reduce((total, item) => total + item.quantity, 0);
  };
  
  return (
    <div className="shopping-cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Your Shopping Cart</h1>
          <div className="cart-totals">
            <p>Total Items: {getTotalItems()}</p>
            <p className="total-amount">Total Amount: ${calculateTotalAmount().toFixed(2)}</p>
          </div>
        </div>
        
        {cart.items.length === 0 ? (
          <div className="empty-cart">
            <ShoppingBag size={80} />
            <h2>Your cart is empty</h2>
            <p>Add some plants to get started!</p>
            <Link to="/products" className="continue-shopping-btn">
              <ArrowLeft size={20} />
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cart.items.map(item => {
                const itemTotal = (item.price * item.quantity).toFixed(2);
                
                return (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <p className="plant-category">{item.category}</p>
                      <p className="unit-price">Unit Price: ${item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="cart-item-controls">
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn"
                          onClick={() => {
                            if (item.quantity > 1) {
                              dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
                            } else {
                              dispatch(deleteItem(item.id));
                            }
                          }}
                        >
                          <Minus size={16} />
                        </button>
                        
                        <span className="quantity">{item.quantity}</span>
                        
                        <button 
                          className="quantity-btn"
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <div className="item-total-price">
                        Total: ${itemTotal}
                      </div>
                      
                      <button 
                        className="delete-btn"
                        onClick={() => dispatch(deleteItem(item.id))}
                      >
                        <Trash2 size={20} />
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="cart-summary">
              <div className="summary-content">
                <h2>Order Summary</h2>
                
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>${calculateTotalAmount().toFixed(2)}</span>
                </div>
                
                <div className="summary-row">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                
                <div className="summary-row total-row">
                  <span>Total Amount:</span>
                  <span className="grand-total">${calculateTotalAmount().toFixed(2)}</span>
                </div>
                
                <div className="cart-actions">
                  <Link to="/products" className="continue-shopping-btn">
                    <ArrowLeft size={20} />
                    Continue Shopping
                  </Link>
                  
                  <button onClick={handleCheckout} className="checkout-btn">
                    <CreditCard size={20} />
                    Checkout (Coming Soon)
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
