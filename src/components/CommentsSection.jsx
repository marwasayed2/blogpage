import React, { useState, useEffect } from "react";

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((response) => response.json())
      .then((data) => {
        setComments(data.comments); // تخزين التعليقات
      })
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users); // تخزين المستخدمين
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const getUserImage = (id) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      return user.image;
    }
    return "https://upload.wikimedia.org/wikipedia/commons/4/4e/LinkedIn_Logo_2023.png"; // صورة افتراضية
  };

  return (
    <section className="comments mb-4">
      <h2 className="title_comment">{comments.length} Comments</h2>
      {comments.slice(0, 3).map((comment, index) => (
        <div key={index} className="d-flex mb-4">
          <img
            src={getUserImage(comment.id)}
            alt="User Image"
            className="rounded-circle comment-img"
            style={{ width: "50px", height: "50px" }}
          />
          <div>
            <h6 className="comment-name">
              {/* عرض الاسم الكامل من الكائن user */}
              {comment.user.fullName || "اسم غير متوفر"}
            </h6>
            <small className="comment-date">{comment.likes}</small>
            <p className="comment-text">{comment.body}</p>
          </div>
        </div>
      ))}
      <hr className="breakline" />
    </section>
  );
};

export default CommentsSection;
