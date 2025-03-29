import React from 'react'

const Steps = () => {
  return (
    <div><section id='steps'>
    <div className="steps-main-div">
      <div className="steps-sub-div">
        <div className="steps-text-div">
          <h1>How does it work</h1>
          <h3>From signing up to donating, we make it simple for you to make a difference.</h3>
        </div>
        <div className="steps-container-div">
          <div className='step-card-main'>
            <div className='step-card-sub' >
              <div className='step-img-div'><img src="https://static.vecteezy.com/system/resources/thumbnails/021/919/677/small/login-icon-in-trendy-flat-style-isolated-on-white-background-approach-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-flat-style-for-graphic-design-vector.jpg" alt="" /></div>
              <div className="step-num-div"><h2>Register</h2></div>
              <div className="steps-expln-div"><p>Create a free account as a donor or recipient.
                Fill in basic details like your name, blood type, and location.
                Build your profile to get started in just a few minutes.
              </p></div>
            </div>
            <div className='arrow'><h1><i className="ri-arrow-right-long-line"></i></h1></div>
          </div>
          <div className='step-card-main'>
            <div className='step-card-sub' >
              <div className='step-img-div'><img src="src\assets\Images\search.png" alt="" /></div>
              <div className="step-num-div"><h2>Find</h2></div>
              <div className="steps-expln-div" ><p>For recipients: Post an urgent blood request with details like blood type, location, and urgency level.
              </p>
                <p>For donors: Search for nearby requests based on your blood type and location.</p></div>
            </div>
            <div className='arrow'><h1><i className="ri-arrow-right-long-line"></i></h1></div>
          </div>
          <div className='step-card-main'>
            <div className='step-card-sub' >
              <div className='step-img-div'><img src="https://static.vecteezy.com/system/resources/previews/034/890/681/non_2x/people-network-icon-simple-outline-style-social-network-connect-circle-share-link-community-team-group-business-concept-thin-line-symbol-illustration-isolated-vector.jpg" alt="" /></div>
              <div className="step-num-div"><h2>Connect</h2></div>
              <div className="steps-expln-div" ><p>View a list of verified donors or recipients.
                Contact them through the app’s messaging or calling feature to arrange a donation.
                The app ensures a smooth connection to fulfill the request promptly.</p></div>
            </div>
            <div className='arrow'><h1><i className="ri-arrow-right-long-line"></i></h1></div>
          </div>
          <div className='step-card-main'>
            <div className='step-card-sub' >
              <div className='step-img-div'><img src="https://static.thenounproject.com/png/3232892-200.png" alt="" /></div>
              <div className="step-num-div"><h2>Save Lives</h2></div>
              <div className="steps-expln-div" ><p>Visit the nearest blood donation center or meet the recipient directly.
                Complete the donation process and help someone in need.
                Share your story to inspire others to join the mission.</p></div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section></div>
  )
}

export default Steps