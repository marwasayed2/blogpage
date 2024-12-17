import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد بوتستراب
import { Link } from 'react-router-dom'; // استيراد Link من React Router
import "../css/TagsSection.css"; // استيراد ملف CSS الخاص بك

const TagsSection = () => {
  return (
    <section className="tags mb-4">
      <div className="d-flex justify-content-between flex-wrap">
        {/* عنوان القسم */}
        <div>
          <h5>Tags</h5>
        </div>

        {/* الأزرار المرتبطة بـ Tags */}
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          {[
            "Accessories",
            "Dress",
            "Fashion",
            "Men",
            "Spring",
            "Winter",
            "Women",
          ].map((tag, index) => (
            <div key={index} className="btn-group me-2" role="group" aria-label={`Group ${index + 1}`}>
              <Link
                to={`/blog/${tag.toLowerCase()}`} // الرابط الصحيح للتوجيه إلى صفحة الفئة
                type="button"
                className="btn btn_tags bg-secondary-subtle text-black"
              >
                {tag}
              </Link>
            </div>
          ))}
        </div>

        {/* قسم مشاركة المنشور */}
        <div>
          <h3 className="sharePost fs-5">Share This Post</h3>
          <div className="links d-flex justify-content-end gap-3">
            {[
              { href: "https://www.facebook.com/", icon: "bi-facebook" },
              { href: "https://x.com/", icon: "bi-twitter" },
              { href: "https://www.youtube.com/", icon: "bi-youtube" },
            ].map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                <i className={`bi ${social.icon} pe-4 text-dark`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <hr className="breakline" />
    </section>
  );
};

export default TagsSection;
