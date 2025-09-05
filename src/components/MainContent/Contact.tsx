import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } else {
        setPhoneCopied(true);
        setTimeout(() => setPhoneCopied(false), 2000);
      }
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact</h1>
        <p>Get in touch with me</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-details">
            <h3>Email</h3>
            <p>davidferreiragithub@gmail.com</p>
          </div>
          <div className="contact-actions">
            <a 
              href="mailto:PixelTheMlgPro@gmail.com" 
              className="action-btn email-btn"
              aria-label="Send email"
            >
              <i className="fas fa-paper-plane"></i>
            </a>
            <button 
              className="action-btn copy-btn"
              onClick={() => copyToClipboard('PixelTheMlgPro@gmail.com', 'email')}
              aria-label="Copy email"
            >
              <i className="fas fa-copy"></i>
            </button>
            {emailCopied && <span className="copy-notification">Copied!</span>}
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-phone"></i>
          </div>
          <div className="contact-details">
            <h3>Phone</h3>
            <p>+351 966 490 531</p>
          </div>
          <div className="contact-actions">
            <a 
              href="tel:+351966490531" 
              className="action-btn call-btn"
              aria-label="Call"
            >
              <i className="fas fa-phone"></i>
            </a>
            <a 
              href="https://wa.me/351966490531" 
              className="action-btn whatsapp-btn"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <button 
              className="action-btn copy-btn"
              onClick={() => copyToClipboard('+351966490531', 'phone')}
              aria-label="Copy phone number"
            >
              <i className="fas fa-copy"></i>
            </button>
            {phoneCopied && <span className="copy-notification">Copied!</span>}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Contact;
