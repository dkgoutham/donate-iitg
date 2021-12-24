import { AccountCircle, TagFaces} from '@material-ui/icons'
import React from 'react'
import './donation-box.scss'

const DonationBox = () => {
    return (
        <div className='box-wrapper'>
            <div className="image-box">
                <img src="https://cdn.hswstatic.com/gif/loan-personal.jpg" alt="" />
            </div>
            <div className="desc-box">
                 Please donate and help me in repaying my education loan.
            </div>
            <div className="user-tags">
                <div className="user-box">
                    <AccountCircle/>
                    <div className="user-name">
                        by Goutham
                    </div>
                </div>
                <div className="donation-tag">
                    Education
                </div>  
            </div>
            <div className="divider-box">
                <hr />
            </div>
            <div className="donate-wrapper">
                <div className="donate-btn">
                    Donate
                </div>
            </div>
            
        </div>
    )
}

export default DonationBox
