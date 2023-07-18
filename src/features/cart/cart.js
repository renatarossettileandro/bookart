import React from "react";
import '../../App.css';
import { useSelector, useDispatch } from "react-redux";

export const Cart = () => {

    const product = useSelector((state) => state.cartReducer.products)
    const dispatch = useDispatch();

    const handleDeleteClick = (item) => {
        dispatch({
            type:'delete',
            payload: item.id,
        })
    }

    console.log(product);

    const displayCart = product.map(item => {
        return(
            <div className="Cart-display">
                <img src={item.src} alt={item.title}></img>
                <div className="Cart-content">
                    <p>{item.title}</p>
                  <h6>{item.price}</h6>    
                  <p>{item.id}</p>
                </div>
                <button onClick={handleDeleteClick.bind(null,item)}>Delete</button>
            </div>
        )
        
    })
    
    console.log(product);

    return(
        <div className="Cart">
            <h2>Basket</h2>
            {displayCart}
        </div>
    )
}
