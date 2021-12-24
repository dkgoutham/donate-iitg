import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import './home.scss';


const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <div className="color">
                <img src="./images/iitg1.jpeg" alt="" />
                <div className="desc-box-home">
                    <div className="desc-text1">
                        <i>Donate</i>
                    </div>
                    <div className="desc-text2">
                        to a chosen cause
                    </div>
                    <div className="desc-text3">
                        Sign up once and <br /> create the most impact.
                    </div>
                    <div className="wrapper-box-home">
                        <div className="donor-home-box">
                            Become a donor
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div className="second-box">
                <div className="second-box-wrapper">
                    <div className="text-second-box">
                        <div className="closing">
                            <div className="first">
                                Raise funds
                            </div>
                            <div className="second">
                                <i>for a cause</i>
                            </div>
                            <div className="third">
                                Donate IITG is a free<br />  fundraising platform
                            </div>
                            <div className="btn-wrapper">
                                <div className="btn">
                                    Start a fundraiser
                                </div>
                            </div>
                        </div>
                        <div className="img">
                            <img src="./images/donation.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="third-box">

            </div>
        
        </div>
    )
}

export default Home
