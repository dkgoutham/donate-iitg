import React, { useState } from 'react'
import './navbar.scss'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset===0 ? false:true);
        return ()=>(window.onscroll=null)
    }

    const user = true;
    return (
        <div className={isScrolled?'navbar scrolled':'navbar'}>
            <div className="navbarWrapper">
                <div className="left">
                    Donation
                </div>
                <div className="right">
                    {
                        !user ?
                        <>
                            <div className="login">
                                LOG IN
                            </div>
                            <div className="signup">
                                SIGN UP
                            </div> 
                        </>  :
                        <>
                            <div className="donate">
                                Donate
                            </div>
                            <div className="request">
                                Request
                            </div>
                            <div className="welcome">
                                Welcome, Username
                            </div>
                            <div className="logout">
                                Log Out
                            </div>
                        </>
                    }
                                  
                    
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
