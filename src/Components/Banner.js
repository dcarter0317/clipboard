import React from 'react'

const Banner = () => {
  return (
    <>
      <section className="container banner">

        <div className='banner__media'>
           <img src="./images/image-devices.png" alt="" />
        </div>

        <div className='banner__text'>
          <h3>Supercharge your workflow</h3>
          <p>We&#39;ve got the tools to boost your productivity.</p>
        </div>
      </section>

      <section className="container banner-features">
         <div className='banner-features__feature'>
          <img src="./images/icon-blacklist.svg" alt="" className="banner-features__icon" />
          <h3>Create blacklists</h3>
          <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
         </div>
         <div className='banner-features__feature'>
         <img src="./images/icon-text.svg" alt="" className="banner-features__icon" />
          <h3>Plain text snippets</h3>
          <p>Remove unwanted formatting from copied text for a consistent look.</p>
         </div>  
         <div className='banner-features__feature'>
          <img src="./images/icon-preview.svg" alt="" className="banner-features__icon" />
           <h3>Sneak preview</h3>
           <p>Quick preview of all snippets on your Clipboard for easy access.</p>
         </div>
      </section>
    </>
  )
}

export default Banner