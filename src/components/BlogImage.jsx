import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../css/blog.css";
import axios from 'axios'; // Import axios

const BlogImage = () => {
  const [products, setProducts] = useState([]); // State to store product data

  useEffect(() => {
    // Fetch data from the dummyjson API
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products); // Store products in the state
      })
      .catch(error => {
        console.error("There was an error fetching the data:", error);
      });
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <section className="BlogImage">
      {products.length > 0 ? (
        // Display the first product only
        <div key={products[1].id} className="product-card mb-4">
          <img
            src={products[0].images[0]}
            alt={products[0].title}
            className="img-fluid mb-4 rounded-4"
          />
          <h2 className="title-section-one">{products[0].title}</h2>
          <p className="text-muted">
            <i className="bi bi-person me-2" style={{ color: '#000' }}></i>
            <span style={{ marginRight: '30px' }}>Brand: {products[0].brand}</span>
            <i className="bi bi-calendar3 me-2" style={{ color: '#000' }}></i>
            <span style={{ marginRight: '30px' }}>Price: ${products[0].price}</span>
            <i className="bi bi-chat-text-fill me-2" style={{ color: '#000' }}></i>
            <span>{products[0].reviews.length} comments</span>
          </p>
        </div>
      ) : (
        <p>Loading product...</p> // Loading state
      )}
    </section>
  );
};

export default BlogImage;
