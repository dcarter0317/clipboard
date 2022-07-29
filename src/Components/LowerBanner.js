import React from 'react'

const LowerBanner = () => {
  return (
    <>
      <section className="container lower-banner">
        <div classname="lower-banner__text">
          <h2>Clipboard for iOS and Mac OS</h2>
          <p>Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
            and you&#39;re ready to start adding to your clipboard.</p>
        </div>

        <div className="btn-container">
         <button href="/" target="blank" className="btn btn--primary">Download for iOS</button>
         <button href="/" target="blank" className="btn btn--secondary">Download for Mac</button>
       </div>
      </section>
    </>
  )
}

export default LowerBanner