import React from 'react'

const Footer = () => {
  return (
    <>
      <section className="container footer grid-container">
        <div className="footer__logo">
          <img src="./images/logo.svg" alt="" />
        </div>
        <div className="footer__links">
          <button className="btn--link">FAQs</button>
          <button className="btn--link">Contact Us</button>
          <button className="btn--link">Privacy Policy</button>
          <button className="btn--link">Press Kit</button>
          <button className="btn--link">Install Guide</button>
        </div>
        <div className="footer__social">
           <img src="./images/icon-facebook.svg" alt="" />
           <img src="./images/icon-twitter.svg" alt="" />
           <img src="./images/icon-instagram.svg" alt="" />
        </div>
      </section>
    </>
  )
} 

export default Footer