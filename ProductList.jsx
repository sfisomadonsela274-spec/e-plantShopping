import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { ShoppingCart, Plus } from 'lucide-react';
import Header from '../components/Header';

const plantsData = [
  // Low Maintenance Category (6 plants)
  {
    id: 1,
    name: "Snake Plant",
    price: 24.99,
    category: "Low Maintenance",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop",
    description: "Thrives on neglect, purifies air"
  },
  {
    id: 2,
    name: "ZZ Plant",
    price: 29.99,
    category: "Low Maintenance",
    image: "https://images.unsplash.com/photo-1545243421-89e5c9b6d12a?w=400&h=400&fit=crop",
    description: "Nearly indestructible, glossy leaves"
  },
  {
    id: 3,
    name: "Pothos",
    price: 18.99,
    category: "Low Maintenance",
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400&h=400&fit=crop",
    description: "Fast-growing trailing vine"
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 16.99,
    category: "Low Maintenance",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop",
    description: "Produces baby spiderettes"
  },
  {
    id: 5,
    name: "Peace Lily",
    price: 32.99,
    category: "Low Maintenance",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    description: "Beautiful white flowers, low light"
  },
  {
    id: 6,
    name: "Chinese Evergreen",
    price: 27.99,
    category: "Low Maintenance",
    image: "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?w=400&h=400&fit=crop",
    description: "Colorful foliage, very tolerant"
  },
  
  // Popular Category (6 plants)
  {
    id: 7,
    name: "Monstera Deliciosa",
    price: 45.99,
    category: "Popular",
    image: "https://images.unsplash.com/photo-1600411833196-7c1f5b5c8c5b?w=400&h=400&fit=crop",
    description: "Iconic split leaves, tropical"
  },
  {
    id: 8,
    name: "Fiddle Leaf Fig",
    price: 59.99,
    category: "Popular",
    image: "https://images.unsplash.com/photo-1530968838472-0a8e62ba8fd0?w=400&h=400&fit=crop",
    description: "Large violin-shaped leaves"
  },
  {
    id: 9,
    name: "Rubber Plant",
    price: 39.99,
    category: "Popular",
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400&h=400&fit=crop",
    description: "Glossy dark green leaves"
  },
  {
    id: 10,
    name: "Bird of Paradise",
    price: 69.99,
    category: "Popular",
    image: "https://images.unsplash.com/photo-1557777587-1c26a1c6c6f7?w=400&h=400&fit=crop",
    description: "Tropical statement plant"
  },
  {
    id: 11,
    name: "Philodendron",
    price: 34.99,
    category: "Popular",
    image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&h=400&fit=crop",
    description: "Heart-shaped leaves, easy care"
  },
  {
    id: 12,
    name: "Alocasia",
    price: 42.99,
    category: "Popular",
    image: "https://images.unsplash.com/photo-1561212024-cb9ad0c2d61e?w=400&h=400&fit=crop",
    description: "Dramatic elephant ear leaves"
  },
  
  // Succulents Category (6 plants)
  {
    id: 13,
    name: "String of Pearls",
    price: 26.99,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?w=400&h=400&fit=crop",
    description: "Unique trailing succulent"
  },
  {
    id: 14,
    name: "Echeveria",
    price: 14.99,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop",
    description: "Rosette-shaped, colorful"
  },
  {
    id: 15,
    name: "Jade Plant",
    price: 22.99,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1561212024-cb9ad0c2d61e?w=400&h=400&fit=crop",
    description: "Tree-like succulent, symbolic"
  },
  {
    id: 16,
    name: "Haworthia",
    price: 18.99,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop",
    description: "Strippy patterns, low light"
  },
  {
    id: 17,
    name: "Burro's Tail",
    price: 24.99,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1545243421-89e5c9b6d12a?w=400&h=400&fit=crop",
    description: "Trailing plump leaves"
  },
  {
    id: 18,
    name: "Zebra Plant",
    price: 19.99,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400&h=400&fit=crop",
    description: "Striped patterns, compact"
  },
];

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedItems, setAddedItems] = useState([]);
  
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  
  const categories = ['All', 'Low Maintenance', 'Popular', 'Succulents'];
  
  const filteredPlants = selectedCategory === 'All' 
    ? plantsData 
    : plantsData.filter(plant => plant.category === selectedCategory);
  
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
    
    // Re-enable button after 2 seconds
    setTimeout(() => {
      setAddedItems(addedItems.filter(id => id !== plant.id));
    }, 2000);
  };
  
  return (
    <div className="product-list-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Our Plant Collection</h1>
          <p className="page-subtitle">Browse our curated selection of houseplants</p>
        </div>
        
        <div className="categories">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="plants-grid">
          {filteredPlants.map(plant => (
            <div key={plant.id} className="plant-card">
              <div className="plant-image">
                <img src={plant.image} alt={plant.name} />
              </div>
              <div className="plant-info">
                <h3 className="plant-name">{plant.name}</h3>
                <p className="plant-description">{plant.description}</p>
                <div className="plant-price">${plant.price.toFixed(2)}</div>
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedItems.includes(plant.id)}
                >
                  {addedItems.includes(plant.id) ? (
                    <>
                      <ShoppingCart size={18} />
                      Added!
                    </>
                  ) : (
                    <>
                      <Plus size={18} />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
