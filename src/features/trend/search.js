import React, { useState } from "react";
import close from '../image/x.png';
import { useSelector, useDispatch } from "react-redux";

const Result = (props) => {
  /* CLOSE BUTTON */
  const [ativoClose, setAtivoClose] = useState(true);
  
  const handleSearchClose = () => {
    setAtivoClose(false);
  };

   /* ACCESS SEARCH BOOKS */
const search = useSelector((state) => state.bookReducer.pesquisa);
const dispatch = useDispatch();

const handleOnClick = (item) => {
    dispatch({
        type: 'add',
        payload: item,
    })
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

  console.log(search)

  /*NOT RESULTS*/

  const resultsOrNot = (search) => {
    if (search.length > 0) {
      return (
        <div className="Container-wrap">
          {showSearchResult}
        </div>
      );
    } else if (search.length === 0 || props.searchTerm === '') {
      return (
        <div className="Container-wrap">
          <p>Sorry, no results.</p>
        </div>
      );
    };
 };


  return (
    <div>
      {ativoClose && (
        <div className="Search">
          <div className="Flex">
            <h1>Search results</h1>
            <button className="Shut" onClick={handleSearchClose}>
              <img src={close} alt="Close" />
            </button>
          </div>
          {resultsOrNot(search)}
        </div>
      )}
    </div>
  );
};

export default Result;
