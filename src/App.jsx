import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogTitlePage from "./pages/blog";
import CategoryPage from './components/CategoryPage'; // مكون صفحة الفئة


const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogTitlePage />} /> {/* المسار هنا */}
        <Route path="/blog/:tag" element={<CategoryPage />} /> {/* التوجيه إلى صفحة الفئة */}

      </Routes>
    </Router>
  );
};

export default App;
