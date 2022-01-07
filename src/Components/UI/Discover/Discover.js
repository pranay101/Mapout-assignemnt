import React, { useState } from "react";
import classes from "./Discover.module.css";
import SearchBar from "./SearchBar/SearchBar";
import CountryPicker from "./CountryPicker/CountryPicker";

const Discover = () => {
  const [countryPicked,setCountryPicked] = useState(null)

  const onCountryPickedHandler = (selectedCountry) =>{
    setCountryPicked(selectedCountry)
    console.log(selectedCountry);
  } 
  return (
    <div className={classes.Discover}>
      <form className={classes.Form}>
        <CountryPicker onPicked = {onCountryPickedHandler} />
        
        { countryPicked ? <SearchBar /> : null  }
      </form>
    </div>
  );
};

export default Discover;
