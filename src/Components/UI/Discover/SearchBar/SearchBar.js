import classes from "./SearchBar.module.css";
import React, { useEffect, useState } from "react";

const SearchBar = (props) => {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setTimeout(() => {
      props.keywordSendtoDiscover(keyword)
    }, 700);

    return{};
  },[keyword,props]);


  const inputChangedHandler = (event) => {
    setKeyword(event.target.value);
  };
  return (
    <div className={classes.SearchBar}>
      <p>
        <span>Enter Some Keywords</span>
      </p>
      <div className={classes.SearchBar__container}>
        <input
          onChange={inputChangedHandler}
          type="text"
          placeholder="Enter Keywords"
        />
      </div>
    </div>
  );
};

export default SearchBar;
