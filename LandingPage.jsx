import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Truck, Sprout } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-content">
        <div className="company-header">
          <Leaf size={64} />
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="company-tagline">Bringing Nature to Your Home</p>
        </div>
        
        <p className="company-description">
          Discover your perfect green companion from our curated collection of houseplants. 
          Each plant is carefully selected and nurtured to bring life and beauty to your space. 
          We believe in sustainable practices and helping you create your own indoor paradise.
        </p>
        
        <Link to="/products" className="get-started-btn">
          Get Started
          <ArrowRight size={20} />
        </Link>
        
        <div className="features">
          <div className="feature">
            <Shield size={24} />
            <span>Quality Guaranteed</span>
          </div>
          <div className="feature">
            <Truck size={24} />
            <span>Free Shipping Over $50</span>
          </div>
          <div className="feature">
            <Sprout size={24} />
            <span>Expert Care Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
