import React from "react";
import { bookImages } from "../image/books/book";
import { useDispatch, useSelector } from "react-redux";

export const History = () => {
     /* DISPLAY BOOKS */
     const details = [
        {src: bookImages.book7, 
         title: 'The girl on the train',
         price: 5.20,
         id:21
        },
        {src: bookImages.book8, 
            title: 'The hunger games',
            price: 4.50,
            id:22
           },
        {src: bookImages.book6, 
            title: 'The Fault in Our Stars',
            price: 7.30,
            id:23
           },   
        {src: bookImages.book3, 
            title: 'Harry Potter',
            price: 3.90,
            id:24
           },   
        {src: bookImages.book1, 
            title: 'The Da Vinci Code',
            price: 6.50,
            id:25
           }, 

        {src: bookImages.book5, 
            title: 'The hunger games',
            price: 4.50,
            id:26
           },
        {src: bookImages.book2, 
            title: 'Harry Potter',
            price: 3.90,
            id:27
           },   
        {src: bookImages.book9, 
            title: 'The Book Thief',
            price: 5.90,
            id:28
        },    
        {src: bookImages.book10, 
            title: 'The Da Vinci Code',
            price: 6.50,
            id:29
           }, 
        {src: bookImages.book4, 
            title: '1984',
            price: 9.99,
            id:30
           }, 
    ];

    /*BUTTON*/

     const dispatch = useDispatch();
     const products = useSelector((state) => state.cartReducer.products);
     
     const handleOnClick = (item) => {
        dispatch({
            type: 'add',
            payload: item,
        })
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