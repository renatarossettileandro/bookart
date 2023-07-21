import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux/bookActions";

const SearchResult = () => {
  /* ACCESS SEARCH BOOKS */
  const search = useSelector((state) => state.bookReducer.pesquisa);
  const dispatch = useDispatch();

  const handleOnClick = (item) => {
    dispatch(add(item));
  };

  const showSearchResult = search.map((item) => {
    return (
      <div className="Books">
        <img src={item.src} alt={item.title} />
        <h6>{item.title}</h6>
        <p>{"£" + item.price}</p>
        <button className="Add" onClick={() => handleOnClick(item)}>
          Add to cart
        </button>
      </div>
    );
  });

  console.log(search);

  return <div>{showSearchResult}</div>;
};

export default SearchResult;
