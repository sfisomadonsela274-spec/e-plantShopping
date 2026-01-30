
## Task 2: `src/components/AboutUs.jsx`

```jsx
import React from 'react';
import { Leaf, Shield, Truck, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="about-header">
          <Leaf size={48} />
          <h1>About Paradise Nursery</h1>
          <p className="tagline">Bringing Nature to Your Doorstep Since 2015</p>
        </div>
        
        <div className="about-content">
          <div className="mission-section">
            <h2>Our Mission</h2>
            <p>
              At Paradise Nursery, we believe that every home deserves a touch of nature. 
              Our mission is to make indoor gardening accessible, enjoyable, and sustainable 
              for everyone. We carefully select each plant in our collection to ensure it 
              not only beautifies your space but also improves your quality of life.
            </p>
          </div>
          
          <div className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <Shield size={32} />
                <h3>Quality Assurance</h3>
                <p>Every plant is nurtured with care and inspected before shipping</p>
              </div>
              <div className="value-card">
                <Truck size={32} />
                <h3>Sustainable Shipping</h3>
                <p>Eco-friendly packaging and carbon-neutral delivery options</p>
              </div>
              <div className="value-card">
                <Heart size={32} />
                <h3>Plant Care Support</h3>
                <p>Lifetime access to our plant care experts and resources</p>
              </div>
            </div>
          </div>
          
          <div className="story-section">
            <h2>Our Story</h2>
            <p>
              Founded by plant enthusiasts Sarah and Michael Green, Paradise Nursery 
              started as a small urban garden in Brooklyn. What began as a passion 
              project quickly grew into a thriving community of plant lovers. Today, 
              we work with over 50 sustainable growers across the country to bring 
              you the healthiest, most beautiful houseplants.
            </p>
            <p>
              We're proud to have helped over 100,000 customers start their plant 
              journey and continue to grow our community every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
