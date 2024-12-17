import React from 'react';
import BlogTitlePage from "../components/BlogTitlePage";
import BlogImage from '../components/BlogImage'; 
import BlogContent from '../components/BlogContent'; 
import TagsSection from "../components/TagsSection";
import CommentsSection from "../components/CommentsSection";
import PostComment from "../components/PostComment";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      {/* عرض عنوان المدونة */}
      <BlogTitlePage />

      {/* محتوى المدونة */}
      <div className="container">
        <>
          <BlogImage />
          <BlogContent />
          <TagsSection />
          <CommentsSection />
          <PostComment />
          <Newsletter />
        </>
      </div>
      <Footer />

    </div>
  );
}

export default Home;
