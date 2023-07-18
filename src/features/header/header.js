import React from "react";
import logo  from '../image/logo.png';
import troller from '../image/carrinho-de-compras.png';
import '../../App.css';
import { useState } from "react";
import { Cart } from '../cart/cart';

export const Header = () => {
    const [ativoCart, setAtivoCart] = useState(false);

    const handleOnClick = () => {
        if(ativoCart === false){
            setAtivoCart(true);
        } else{
            setAtivoCart(false);
        }
    }

    return(
        <div className="App-header">
            <img src={logo} className="Logo" alt='logo'></img>
            <button  onClick={handleOnClick}>
                <img src={troller} class className="Troller" alt='basket'></img>
            </button>
            {ativoCart && <Cart />}
        </div>
    )
}

