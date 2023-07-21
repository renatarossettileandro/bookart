import React from "react";
import '../../App.css';
import { CartContent } from "./cartContent";
import { useState } from 'react';

export const Cart = () => {
    const [showCart, setShowCart] = useState(true);

    const handleCartClose = () => {
      setShowCart(false);
    };
  
    return (
      <div>
        {showCart && (
          <div className="Cart">
            <div className="Flex-cart">
              <h2>Basket</h2>
              <button className="Close" onClick={handleCartClose}></button>
            </div>
            <CartContent />
          </div>
        )}
      </div>
    );
};