import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { removeItem, deleteItem, updateQuantity } from '../store/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  
  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };
  
  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(deleteItem(item.id));
    }
  };
  
  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  };
  
  const totalPrice = (item.price * item.quantity).toFixed(2);
  
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="plant-category">{item.category}</p>
        <p className="unit-price">${item.price.toFixed(2)} each</p>
      </div>
      
      <div className="cart-item-controls">
        <div className="quantity-controls">
          <button 
            className="quantity-btn"
            onClick={handleDecrease}
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          
          <span className="quantity">{item.quantity}</span>
          
          <button 
            className="quantity-btn"
            onClick={handleIncrease}
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>
        
        <div className="item-total">${totalPrice}</div>
        
        <button 
          className="delete-btn"
          onClick={handleDelete}
          aria-label="Remove item"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
