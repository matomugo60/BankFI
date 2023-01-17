import React from "react";

// function for the search

const Search = (props) => {

  let handleChange = (evt) => {
    props.searchFun(evt.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder={"Search Transactions"}
        value={props.searchValue}
        onChange={handleChange}
      />
      <i></i>
    </div>
  );
};

export default Search;