import React from "react";

function Banner(){
    return (
        <div className="banner">
           <div className="container">
           <div className="banner__row">
                <div className="banner__left">
                    <h2 className="banner__title">Corporate Legal Representation</h2>
                    <p className="banner__subtitle">We understand the difficulties and stress that your legal issues bring. Our team is committed to providing you with the individual attention, communication, and dedication you deserve.</p>
                    <button className="banner__button">Request Consultation</button>
                </div>
                <div className="banner__right">
                    <img src="/public/Banner.png" alt="banner" />
                </div>
            </div>
           </div>
        </div>
    )
}

export default Banner