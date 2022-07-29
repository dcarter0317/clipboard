import React from 'react'

const FeatureSection = () => {
  return (
    <>
      <section className="container feature-section">
         <div className="featured-section__media">
           <img src="../images/image-computer.png" alt="" />
         </div>
         <div className="featured-section__text">
          <div>
           <h3>Quick Search</h3>
           <p>Easily search your snippets by content, category, web address, application, and more.</p>
         </div>
         <div>
           <h3>iCloud Sync</h3>
           <p>Instantly saves and syncs snippets across all your devices.</p>
         </div>
         <div>
           <h3>Complete History</h3>
           <p>Retrieve any snippets from the first moment you started using the app.</p>
         </div>
        </div>
      </section>
    </>
  )
}

export default FeatureSection