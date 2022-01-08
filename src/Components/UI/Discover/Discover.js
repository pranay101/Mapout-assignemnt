import React, { useState } from "react";
import classes from "./Discover.module.css";
import SearchBar from "./SearchBar/SearchBar";
import CountryPicker from "./CountryPicker/CountryPicker";

const Discover = () => {
  const [countryPicked, setCountryPicked] = useState(null);

  const onCountryPickedHandler = (selectedCountry) => {
    setCountryPicked(selectedCountry);
    console.log(selectedCountry);
  };
  return (
    <div className={classes.Discover}>
      <div className={classes.DiscoverElement}>
        <CountryPicker onPicked={onCountryPickedHandler} />
      </div>
      <div className={classes.DiscoverElement}>
        {countryPicked ? <SearchBar /> : null}
      </div>
    </div>
  );
};

export default Discover;
