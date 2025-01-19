import React from 'react'
import Butoon from '../Snipits/Butoon'
import "remixicon/fonts/remixicon.css";

const Home = () => {
    return (
        <div>
            <section id='home'>
                <div >
                    <div className='home-main-video'>
                        <video src="src\assets\Images\bgvideo.mp4" autoPlay loop muted></video>
                    </div>
                    <div className='home-main-div'>
                        <div className="home-text-main">
                            <div className="home-text-sub"><h1>Connecting Lives, Saving Lives.</h1>
                                <h4>Your Contribution Matters – Make an Impact Today.</h4>
                                <p>Blood Connect is more than just a platform – it's a bridge of hope between those in need and those willing to help. With real-time tracking, easy connectivity, and a growing network of donors and recipients, we aim to simplify the blood donation process. Whether you're saving lives as a donor or finding urgent help for a loved one, Blood Connect ensures that every drop counts. Join us in building a community where saving lives becomes second nature.</p>
                                <div className='home-text-button'>
                                    <Butoon name='Register' />
                                </div></div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home