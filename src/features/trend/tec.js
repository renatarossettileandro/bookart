import React from "react";
import { bookImages } from "../image/books/book";
import { useSelector, useDispatch } from "react-redux";

export const Tec = () => {
     /* DISPLAY BOOKS */

    const details = [
        {src: bookImages.book8, title: 'Seabiscuit', price: 12.00, id:38}, 
        {src: bookImages.book5, title: 'The Miracle of Castel Di Sangro', price: 6.50, id:35},
        {src: bookImages.book2, title: 'The Boys in the Boat', price: 4.50, id:32},
        {src: bookImages.book6, title: 'The Secret Race', price: 7.99, id:36}, 
        {src: bookImages.book4, title: 'The Blind Side', price: 3.90, id:34}, 
        {src: bookImages.book7, title: 'Friday Night Lights', price: 5.90, id:37}, 
        {src: bookImages.book9, title: 'The Yankee Years', price: 9.99, id:39}, 
        {src: bookImages.book1, title: 'Moneyball', price: 5.21, id:31},
        {src: bookImages.book10, title: 'The Boys of Summer', price: 5.90, id:40}, 
        {src: bookImages.book3, title: 'Open', price: 7.30, id:33},   

    ];

    /*BUTTON*/

    const dispatch = useDispatch();
    const products = useSelector((state) => state.cartReducer.products);

    const handleOnClick = (item) =>{
        const itemExists = products.some((existingItem) => existingItem.id === item.id);
        if (!itemExists) {
            dispatch({
            type: 'add',
            payload: item,
            });
        };
    }

    console.log(products);

    const displaybooks = details.map(item => {
        return(
        <div className="Books">
            <img src={item.src} alt={item.title}></img>
            <h6>{item.title}</h6>
            <p>{'£'+item.price}</p>
            <button className="Add" onClick={handleOnClick.bind(null,item)}>Add to cart</button>
        </div>
        )
    })
    return(
        <div>
        <div className="Container-wrap">
            {displaybooks}
        </div>
        
    
        </div>
    )
}
