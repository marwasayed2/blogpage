import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/CategoryPage.css';

const CategoryPage = () => {
  const { tag } = useParams(); // استرجاع قيمة الفئة (tag) من الرابط
  const [products, setProducts] = useState([]); // تخزين المنتجات

  useEffect(() => {
    // جلب المنتجات بناءً على الفئة
    axios.get(`https://dummyjson.com/products/search?q=${tag}`)
      .then(response => {
        setProducts(response.data.products); // تخزين المنتجات في الـ state
      })
      .catch(error => {
        console.error("هناك خطأ في جلب البيانات:", error);
      });
  }, [tag]); // سيتم التحديث كلما تغيرت قيمة tag

  return (
    <section className="category-page">
      <h1>Products in {tag} category</h1>
      <div className="products-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.images[0]} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
