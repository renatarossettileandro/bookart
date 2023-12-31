import React from "react";
import {bookImages} from '../image/books/book.js';

import { useSelector, useDispatch } from "react-redux";


export const Sports = () => {
/* DISPLAY BOOKS */
    const details = [
        {src: bookImages.book1, 
         title: 'The girl on the train',
         price: 5.21,
         id:1,
        },
        {src: bookImages.book2, 
            title: 'The hunger games',
            price: 4.50,
            id:2,
           },
        {src: bookImages.book3, 
            title: 'The Fault in Our Stars',
            price: 7.30,
            id:3,
            counter:1
           },   
        {src: bookImages.book4, 
            title: 'Harry Potter',
            price: 3.90,
            id:4,
           },   
        {src: bookImages.book5, 
            title: 'The Da Vinci Code',
            price: 6.50,
            id:5,
           }, 

        {src: bookImages.book6, 
            title: 'Fifty Shades of Grey',
            price: 7.99,
            id:6,
           }, 
        {src: bookImages.book7, 
            title: 'The Lord of the Rings',
            price: 5.90,
            id:7,
           }, 
        {src: bookImages.book8, 
            title: 'Pride and Prejudice',
            price: 12.00,
            id:8,
           }, 
        {src: bookImages.book9, 
            title: '1984',
            price: 9.99,
            id:9,

           }, 
        {src: bookImages.book10, 
            title: 'The Book Thief',
            price: 5.90,
            id:10,
           }, 
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
            
    };

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
