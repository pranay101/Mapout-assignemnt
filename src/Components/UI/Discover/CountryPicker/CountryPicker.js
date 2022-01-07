import classes from "./CountryPicker.module.css";
import { useState, useEffect } from "react";
import Countries from "./Countries.json";

const CountryPicker = () => {
  const countries_list = [];
  const [CountryListState,setCountryListState] = useState([])

  useEffect(() => {
    Object.keys(Countries.countries).forEach(function (key) {
      countries_list.push(Countries.countries[key].name);
    });

    // console.log(countries_list);
    setCountryListState(countries_list);
  }, []);

  const CountrySelectorHandler = (event) => {
    console.log(event.target.value);
  };

  const renderCountry = (country) => {
      return <option key={country} value={country}>
        {country}
          </option>
  };

  return (
    <div className={classes.SearchInput}>
      <p>Choose Country</p>
      <select value="Select_Country" onChange={CountrySelectorHandler}>
        <option disabled>Select a Country </option>       
        {
          CountryListState.map(country => {
            return renderCountry(country)
          })
        }
      </select>
    </div>
  );

};

export default CountryPicker;


