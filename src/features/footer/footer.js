import React from "react";
import Logo from '../image/logo.png';


export const Footer = () => {
    return(
        <div className="Container Rodape">
            <div className="Content-footer">
                <img src={Logo} alt='logo'></img>
            </div>
            <div className="Content-footer">
                <h5>Products</h5>
                <h6>Prices Drop</h6>
                <h6>New Produtcs</h6>
                <h6>Best Sales</h6>
                <h6>Contact Us</h6>
            </div>
            <div className="Content-footer">
               <h5>Our Company</h5>
               <h6>Delivery</h6>
               <h6>Legal Notice</h6>
               <h6>Terms and Conditions of Use</h6>
               <h6>About Us</h6>
            </div>


        </div>
    )
}