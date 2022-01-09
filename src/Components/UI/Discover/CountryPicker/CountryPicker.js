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
    props.onPicked(CountryValue)

  },[CountryValue,CountryListState]);

  const CountrySelectorHandler = (event) => {
    setCountryValue(event.target.value);
  };


  const renderCountry = (country,index) => {
    return (
      <option className={classes.Option} key={index} value={country}>
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
          {CountryListState.map((country,index) => {
            return renderCountry(country,index);
          })}
        </select>
      </div>
    </div>
  );
};

export default CountryPicker;
