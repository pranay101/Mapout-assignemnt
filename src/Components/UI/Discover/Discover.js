import React, { useState,useRef } from "react";
import classes from "./Discover.module.css";
import SearchBar from "./SearchBar/SearchBar";
import CountryPicker from "./CountryPicker/CountryPicker";

const Discover = () => {
  const [countryPicked, setCountryPicked] = useState(null);
  const searchbar = useRef()

  const onCountryPickedHandler = (selectedCountry) => {
    setCountryPicked(selectedCountry);
    console.log(selectedCountry);
    searchbar.current.scrollIntoView(true)
  };

  const dataFetch = (data) =>{
    console.log(data);
  }

  return (
    <div className={classes.Discover}>
      <div className={classes.DiscoverElement}>
        <CountryPicker onPicked={onCountryPickedHandler} />
      </div>
      <div ref={searchbar} className={classes.DiscoverElement}>
        {countryPicked ? <SearchBar dataFetch={dataFetch} location={countryPicked} /> : null}
      </div>
    </div>
  );
};

export default Discover;
