import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد بوتستراب

const PostComment = () => {
  // الحالة لحفظ البيانات المدخلة
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // الحالة للتحقق من الأخطاء
  const [errors, setErrors] = useState({
    nameError: '',
    emailError: '',
    messageError: ''
  });

  // دالة التحديث الخاصة بالحقول
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // دالة التحقق من صحة النموذج
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      nameError: '',
      emailError: '',
      messageError: ''
    };

    // التحقق من الاسم
    if (!formData.name) {
      newErrors.nameError = 'Name is required.';
      valid = false;
    }

    // التحقق من البريد الإلكتروني
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.emailError = 'Invalid email address.';
      valid = false;
    }

    // التحقق من الرسالة
    if (!formData.message || formData.message.length < 10) {
      newErrors.messageError = 'Message must be at least 10 characters.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // دالة إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // إذا كان النموذج صحيحًا، يمكنك إرسال البيانات هنا
      console.log('Form Submitted:', formData);
    }
  };

  return (
    <section className="postComment">
      <h4 className="mb-4 Post_Comment_h4">Post Comment</h4>
      <div className="container-fluid post-comment mb-5">
        <form id="commentForm" className="form-style" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.nameError && (
              <div className="invalid-feedback" style={{ color: 'red' }}>
                {errors.nameError}
              </div>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.emailError && (
              <div className="invalid-feedback" style={{ color: 'red' }}>
                {errors.emailError}
              </div>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <textarea
              id="message"
              className="form-control"
              rows="5"
              placeholder="Enter message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.messageError && (
              <div className="invalid-feedback" style={{ color: 'red' }}>
                {errors.messageError}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-chat-text me-2"></i>Post Comment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PostComment;
