import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import CartItem from '../components/CartItem';
import { ShoppingBag, ArrowLeft,
