import React from "react";
import Book1 from '../image/books/book1.png';
import Book2 from '../image/books/books2.jpg';
import Book3 from '../image/books/book3.jpg';
import Book4 from '../image/books/book4.jpg';
import Book5 from '../image/books/book5.jpg';
import Book6 from '../image/books/book6.jpg';
import Book7 from '../image/books/book7.jpg';
import Book8 from '../image/books/book8.jpeg';
import Book9 from '../image/books/book9.jpg';
import Book10 from '../image/books/book10.jpeg';

export const Arts = () => {
    const details = [
        {src: Book5, 
            title: 'The Da Vinci Code',
            price: '£ 6.50'
           }, 

        {src: Book6, 
            title: 'Fifty Shades of Grey',
            price: '£ 7.99'
           }, 
        {src: Book7, 
            title: 'The Lord of the Rings',
            price: '£ 5.90'
           }, 
        {src: Book8, 
            title: 'Pride and Prejudice',
            price: '£ 12.00'
           }, 
        {src: Book9, 
            title: '1984',
            price: '£ 9.99'
           }, 
        {src: Book10, 
            title: 'The Book Thief',
            price: '£ 5.90'
           }, 
        {src: Book1, 
         title: 'The girl on the train',
         price: '£ 5.20'
        },
        {src: Book2, 
            title: 'The hunger games',
            price: '£ 4.50'
           },
        {src: Book3, 
            title: 'The Fault in Our Stars',
            price: '£ 7.30'
           },   
        {src: Book4, 
            title: 'Harry Potter',
            price: '£ 3.90'
           },   
    ];

    const displaybooks = details.map(item => {
        return(
        <div className="Books">
            <img src={item.src} alt={item.title}></img>
            <h6>{item.title}</h6>
            <p>{item.title}</p>
            <button className="Add">Add to cart</button>
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
