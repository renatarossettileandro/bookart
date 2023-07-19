import { bookImages } from "../../../features/image/books/book";

const initialstate = {
    books: [
    {src: bookImages.book1, title: 'Moneyball', price: 5.21, id:1},
    {src: bookImages.book2, title: 'The Boys in the Boat', price: 4.50, id:2},
    {src: bookImages.book3, title: 'Open', price: 7.30, id:3},   
    {src: bookImages.book4, title: 'The Blind Side', price: 3.90, id:4},   
    {src: bookImages.book5, title: 'The Miracle of Castel Di Sangro', price: 6.50, id:5}, 
    {src: bookImages.book6, title: 'The Secret Race', price: 7.99, id:6}, 
    {src: bookImages.book7, title: 'Friday Night Lights', price: 5.90, id:7}, 
    {src: bookImages.book8, title: 'Seabiscuit', price: 12.00, id:8}, 
    {src: bookImages.book9, title: 'The Yankee Years', price: 9.99, id:9}, 
    {src: bookImages.book10, title: 'The Boys of Summer', price: 5.90, id:10}, 
    {src: bookImages.book1, title: 'Moneyball', price: 5.21, id:11},
    {src: bookImages.book2, title: 'The Boys in the Boat', price: 4.50, id:12},
    {src: bookImages.book3, title: 'Open', price: 7.30, id:13},   
    {src: bookImages.book4, title: 'The Blind Side', price: 3.90, id:14},   
    {src: bookImages.book5, title: 'The Miracle of Castel Di Sangro', price: 6.50, id:15}, 
    {src: bookImages.book6, title: 'The Secret Race', price: 7.99, id:16}, 
    {src: bookImages.book7, title: 'Friday Night Lights', price: 5.90, id:17}, 
    {src: bookImages.book8, title: 'Seabiscuit', price: 12.00, id:18}, 
    {src: bookImages.book9, title: 'The Yankee Years', price: 9.99, id:19}, 
    {src: bookImages.book10, title: 'The Boys of Summer', price: 5.90, id:20}, 
    {src: bookImages.book1, title: 'Moneyball', price: 5.21, id:21},
    {src: bookImages.book2, title: 'The Boys in the Boat', price: 4.50, id:22},
    {src: bookImages.book3, title: 'Open', price: 7.30, id:23},   
    {src: bookImages.book4, title: 'The Blind Side', price: 3.90, id:24},   
    {src: bookImages.book5, title: 'The Miracle of Castel Di Sangro', price: 6.50, id:25}, 
    {src: bookImages.book6, title: 'The Secret Race', price: 7.99, id:26}, 
    {src: bookImages.book7, title: 'Friday Night Lights', price: 5.90, id:27}, 
    {src: bookImages.book8, title: 'Seabiscuit', price: 12.00, id:28}, 
    {src: bookImages.book9, title: 'The Yankee Years', price: 9.99, id:29}, 
    {src: bookImages.book10, title: 'The Boys of Summer', price: 5.90, id:30}, 
    {src: bookImages.book1, title: 'Moneyball', price: 5.21, id:31},
    {src: bookImages.book2, title: 'The Boys in the Boat', price: 4.50, id:32},
    {src: bookImages.book3, title: 'Open', price: 7.30, id:33},   
    {src: bookImages.book4, title: 'The Blind Side', price: 3.90, id:34},   
    {src: bookImages.book5, title: 'The Miracle of Castel Di Sangro', price: 6.50, id:35}, 
    {src: bookImages.book6, title: 'The Secret Race', price: 7.99, id:36}, 
    {src: bookImages.book7, title: 'Friday Night Lights', price: 5.90, id:37}, 
    {src: bookImages.book8, title: 'Seabiscuit', price: 12.00, id:38}, 
    {src: bookImages.book9, title: 'The Yankee Years', price: 9.99, id:39}, 
    {src: bookImages.book10, title: 'The Boys of Summer', price: 5.90, id:40}, 
],
pesquisa: []
};




export const bookReducer = (state = initialstate, action) => {
    switch (action.type) {
      case 'search': {
        const  searchTerm  = action.payload;
        const filteredBooks = state.books.filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
       return {
          ...state,
          pesquisa: filteredBooks,
        };
      }

      default:
        return state;
    }
  };
