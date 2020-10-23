import React from "react";

const Search = (props) => {
  let handleInput = (evt) => {
    props.changeSearchTerm(evt.target.value)
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        // onChange={() => {
        //   console.log("Searching...");

        // }}
        value={props.searchTerm}
        onChange={handleInput}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;