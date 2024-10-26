 import React from "react";
import Fecbook from "../assets/icons/Fecbook";
import Linkeds from "../assets/icons/Linkeds";
import Twitter from "../assets/icons/Twitter";
import Arraw from "../assets/icons/Arraw";
import FooterImg from "/public/Footer.png";

function Footer(){
    return(
        <footer className="footer">
         <div className="container">
         <div className="footer__top">
           <div className="footer__wrap">
            <div className="footer__left">
                <div className="footer__logo"><img src={FooterImg} alt="footer" /></div>
                <p className="footer__text">2972 Westheimer Road</p>
                <p className="footer__text">Denver, CO 80021</p>
                <p href="#" className="footer__text">(720) 555-0123</p>
                <a href="#" className="footer__addres">info.denver@mckinley.com</a>
                <div className="footer__links">
                    <a href="#" className="footer__link"> <Fecbook className="footer__icon" /> Facebook </a>
                    <a href="#" className="footer__link"> <Linkeds className="footer__icon" /> LinkedIn </a>
                   <a href="#" className="footer__link"> <Twitter className="footer__icon" />  Twitter </a>
               </div>
            </div>

            <div className="footer__right">
                <h1 className="footer__right-text">
                Get legal news, advice, and <br/> best practices delivered to your inbox.
                </h1>
                <form  className="footer__row">
                 <input type="email" name="email" placeholder="Email Address"  className="footer__input" />
                 <button type="submit" className="footer__button"><Arraw /></button>
                 </form>
            </div>
           </div>

         </div>
      
         </div>
        </footer>
        
    )
}

export default Footer