import React, { useState } from 'react';
import "../css/Newsletter.css";


const Newsletter = () => {
  // الحالة لتخزين البريد الإلكتروني المدخل
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // دالة التحديث عند تغيير قيمة البريد الإلكتروني
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // دالة التحقق من صحة البريد الإلكتروني
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // دالة إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      console.log('Email submitted:', email);
      // هنا يمكنك إرسال البريد الإلكتروني إلى الخادم إذا كنت تريد
    }
  };

  return (
    <div className="Newsletter text-center py-4 mb-4">
      <h5 className="title">Newsletter</h5>
      <p>Learn about our most recent news, updates, and deals by subscribing.</p>

      <div className="input-group pb-3">
        {/* Form Start */}
        <form id="subscribeForm" className="w-100" onSubmit={handleSubmit}>
          <div className="d-flex">
            {/* Email Input */}
            <input
              type="text"
              id="subscribeEmail"
              className="form-control"
              placeholder="email@example.com"
              aria-label="Recipient's username"
              style={{ height: '70px' }}
              value={email}
              onChange={handleChange}
              aria-describedby="button-addon2"
            />
            <button className="btn_Subscribe" type="submit" id="button-addon2">
              Subscribe
            </button>
          </div>
          {/* Error Message */}
          {error && <div id="emailError2" className="text-danger mt-2">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
