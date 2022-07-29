import React from 'react'

const Header = () => {
  return (
    <>
       <section className="container header">
         <img className="logo-header" src="../images/logo.svg" alt="" />
         <h1 className='title'>A history of everything you copy</h1>

         <p>Clipboard allows you to track and organize everything you 
         copy. Instantly access your clipboard on all your devices.</p>

       <div className="btn-container">
         <button href="/" target="blank" className="btn btn--primary">Download for iOS</button>
         <button href="/" target="blank" className="btn btn--secondary">Download for Mac</button>
       </div>
       </section>
    </>
  )
}

export default Header