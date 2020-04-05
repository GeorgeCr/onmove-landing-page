import React from 'react';
import './ContactArea.css';
import Fb from '../../assets/fb.png';
import Mail from '../../assets/mail.png';

export default class BenefitsArea extends React.Component {
    render(){
        return(
            <div className="contact-area-container">
               <h2 className="area-title">date de contact</h2>
               <div className="contact-details-wrapper">
                    <div className="left-details">
                        <span className="phone">0744557799</span>
                        <span className="email">onmove.bus@gmail.com</span>
                        <span className="address">B-dul Carol I, Nr.11, Corp B</span>
                        <span className="postal-code">700506, Iaşi</span>
                        <div className="social-details">
                            <img src={Fb} alt="fb" />
                            <img src={Mail} alt="mail " />
                        </div>
                    </div>
                    <div className="right-details">
                        <p className="subscribe">
                            Abonează-te la newsletter
                        </p>
                        <input type="email" placeholder="email@gmail.com" />
                        <button className="subscribe-button">Abonează-te</button>
                    </div>
               </div>
           </div> 
        )
    }

}