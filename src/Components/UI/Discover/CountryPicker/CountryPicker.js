import classes from "./CountryPicker.module.css";
import { useState, useEffect,useMemo } from "react";
import Countries from "./Countries.json";

const CountryPicker = (props) => {
  const countries_list = useMemo(()=> [],[]);
  const [CountryListState, setCountryListState] = useState([]);
  const [CountryValue, setCountryValue] = useState("Choose Your Country");

  useEffect(() => {
    Object.keys(Countries.countries).forEach(function (key) {
      countries_list.push(Countries.countries[key].name);
    });

    // console.log(countries_list);
    setCountryListState(countries_list);
  },[countries_list]);

  const CountrySelectorHandler = (event) => {
    // console.log(event.target.value);
    setCountryValue(event.target.value);
    props.onPicked(event.target.value)
  };

  const renderCountry = (country) => {
    return (
      <option className={classes.Option} key={country} value={country}>
        {country}
      </option>
    );
  };

  return (
    <div className={classes.DropDown}>
      <p>
        <span>Pick Your Country.</span>
      </p>
      <div className={classes.DropDown__container}>
        <select defaultValue={CountryValue} onChange={CountrySelectorHandler}>
          {CountryListState.map((country) => {
            return renderCountry(country);
          })}
        </select>
      </div>
    </div>
  );
};

export default CountryPicker;
