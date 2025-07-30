import React, { useState, useEffect } from 'react';
import './home.css'; // Import the CSS

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("https://fakestoreapi.com/products");
      const response = await result.json();
      setData(response);
    }
    fetchData();
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Explore Products</h1>
      <div className="products-grid">
        {data.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} className="product-image" />
            <h2 className="product-title">{item.title}</h2>
            <p className="product-price">${item.price}</p>
            <p className="product-description">{item.description.slice(0, 100)}...</p>
            <button className="product-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
