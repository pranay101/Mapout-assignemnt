import React from "react";
import classes from "./Discover.module.css";
import SearchBar from "./SearchBar/SearchBar";
import CountryPicker from "./CountryPicker/CountryPicker";

const Discover = () => {
  return (
    <div className={classes.Discover}>
      <form className={classes.Form}>
        <SearchBar />
        <CountryPicker />
      </form>
    </div>
  );
};

export default Discover;
