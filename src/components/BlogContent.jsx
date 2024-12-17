import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد بوتستراب
import "../css/blog.css"; // استيراد ملف CSS الخاص بك
import axios from 'axios'; // استيراد axios لجلب البيانات من API

const BlogContent = () => {
  const [product, setProduct] = useState(null); // State لتخزين بيانات المنتج

  useEffect(() => {
    // جلب بيانات المنتج من API
    axios.get('https://dummyjson.com/products')
      .then(response => {
        // تخزين أول منتج فقط
        setProduct(response.data.products[0]); // عرض أول منتج فقط
      })
      .catch(error => {
        console.error("هناك خطأ في جلب البيانات:", error);
      });
  }, []); // تشغيل مرة واحدة عند تحميل المكون

  return (
    <section className="blog-content mb-4">
      {product ? (
        <>
          {/* المحتوى الرئيسي */}
          <div>
            <p className="ContentBlog">
              {product.description} {/* وصف المنتج */}
            </p>
          </div>

          {/* الاقتباس */}
          <div className="responsive-blockquote">
            <blockquote className="blockquote">
              {product.title} {/* عنوان المنتج */}
            </blockquote>
          </div>

          {/* فقرة إضافية */}
          <div>
            <p className="ContentBlog">
              Brand: {product.brand} {/* اسم العلامة التجارية */}
            </p>
          </div>

          {/* فقرة أخرى */}
          <div>
            <p className="ContentBlog">
              Price: ${product.price} {/* سعر المنتج */}
            </p>
          </div>

          {/* خط فاصل */}
          <hr className="breakline" />
        </>
      ) : (
        <p>Loading product data...</p> // حالة التحميل
      )}
    </section>
  );
};

export default BlogContent;
