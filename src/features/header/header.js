import React from "react";
import logo  from '../image/logo.png';
import troller from '../image/carrinho-de-compras.png';
import '../../App.css';
import { useState } from "react";
import { Cart } from '../cart/cart';
import  Result  from "../trend/search";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
    /*DISPLAY CARD*/
    
    const [ativoCart, setAtivoCart] = useState(false);

    const handleOnClick = () => {
        if(ativoCart === false){
            setAtivoCart(true);
        } else{
            setAtivoCart(false);
        }
    }

    /*SEARCH*/
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const pesquisa = useSelector((state) => state.bookReducer.pesquisa);
    
    const handleInputChange = (event) => {
        if(event.target.value === ''){
            setSearchTerm('');
        }else{
            setSearchTerm(event.target.value);

        }
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
          type: 'search',
          payload: searchTerm,
        });
        setAtivoResult(true);
    };

    console.log(pesquisa);


    /*SHOW SEARCH PAGE*/
    const [ativoResult, setAtivoResult] = useState(false);

    const handleResultOnClick = () => {
        setAtivoResult(false)
        
    }
  
    return(
        <div className="App-header">
            <img src={logo} className="Logo" alt='logo'></img>
            <div className="Form">
                <form onSubmit={handleSubmit}>
                    <input className="Formulario" type="text" value={searchTerm} onChange={handleInputChange}>
                    </input>
                    <button type="submit" onClick={handleResultOnClick}>Search</button>
                </form>
            </div>
            <button  onClick={handleOnClick} className="ButtonTroller">
                <img src={troller} className="Troller" alt='basket'></img>
            </button>
            <div  className="Basket">
                {ativoCart && <Cart />}
                {ativoResult &&<Result searchTerm={searchTerm}/>}
            </div>

        </div>
    )
}

