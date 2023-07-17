import React from "react";
import logo  from '../image/logo.png';
import troller from '../image/carrinho-de-compras.png';
import '../../App.css';


export const Header = () => {
    return(
        <div className="App-header">
            <img src={logo} className="Logo" alt='logo'></img>
            <img src={troller} class className="Troller" alt='basket'></img>
        </div>
    )
}

