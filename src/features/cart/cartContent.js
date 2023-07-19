import React, { useState } from "react";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { Counter } from "../counter/counter";

export const CartContent = () => {
  const products = useSelector((state) => state.cartReducer.products);
  const dispatch = useDispatch();

  const handleDeleteClick = (item) => {
    dispatch({
      type: "delete",
      payload: item.id,
    });
  };

  const [quantity, setQuantity] = useState({}); 

  const handleQuantityChange = (id, newQuantity) => {
    setQuantity((prevState) => ({
      ...prevState,
      [id]: newQuantity,
    })); 
  };

  const displayCart = products.map((item) => {
    const itemQuantity = quantity[item.id] || 1; 

    return (
      <div className="Cart-display" key={item.id}>
        <img src={item.src} alt={item.title} />
        <div className="Cart-content">
          <p>{item.title}</p>
          <h6>{item.price}</h6>
          <Counter
            id={item.id} 
            unit={itemQuantity}
            onQuantityChange={handleQuantityChange}
          />
        </div>
        <button onClick={() => handleDeleteClick(item)} className="Button-delete">
          Delete
        </button>
      </div>
    );
  });

  const calculateTotalPrice = () => {
    let totalPrice = 0.0;
    products.forEach((item) => {
      const itemQuantity = quantity[item.id] || 1; 
      totalPrice += item.price * itemQuantity;
    });
    return totalPrice;
  };

  return (
    <div>
      {displayCart}
      <div className="Flex Total">
        <h2>Total:</h2>
        <h3>£{calculateTotalPrice()}</h3>
      </div>
    </div>
  );
};
