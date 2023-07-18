import React from "react";
import '../../App.css';
import { useSelector, useDispatch } from "react-redux";

export const CartContent = () =>{
   /*DELETE*/
   
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

   /*TOTAL PRICE*/

   const price = () => {
        let totalPrice = 0.00;
        product.forEach(item => {
            totalPrice += item.price;
        });
        return totalPrice;
    };
   

    return(
        <div>
            {displayCart}
            <div className="Flex Total">
                <h2>Total:</h2>
                <h3>£{price()}</h3>
            </div>
        </div>
    )
}







