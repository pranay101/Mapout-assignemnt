import React, { useState, useRef, useEffect } from "react";
import classes from "./Discover.module.css";
import SearchBar from "./SearchBar/SearchBar";
import CountryPicker from "./CountryPicker/CountryPicker";
import axios from "axios";

const Discover = (props) => {
  // State Variable. which on changing will reload the eniter component
  const [countryPicked, setCountryPicked] = useState(null);
  const [keywordPicked, setkeywordPicked] = useState(null);

  const searchbar = useRef();

  const onCountryPickedHandler = (selectedCountry) => {
    setCountryPicked(selectedCountry);
    searchbar.current.scrollIntoView(true);
  };

  const onKeywordPickedHandler = (selectedKeyword) => {
    setkeywordPicked(selectedKeyword);
  };

  useEffect(() => {
    setTimeout(() => {
      var data = JSON.stringify({
        keyword: keywordPicked,
        location: countryPicked,
      });

      if (keywordPicked && countryPicked) {
        var config = {
          method: "post",
          url: "https://staging.mapout.com/mapout-node/api/getemployabilityscore",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            if(response.data.length === 0)
              props.dataFetchtoLayout(JSON.stringify("No jobs found"));


            props.dataFetchtoLayout(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }, 800);

    return () => {
      console.log("Cleaning up!!");
    };
  }, [countryPicked, keywordPicked]);

  return (
    <div className={classes.Discover}>
      <div className={classes.DiscoverElement}>
        <CountryPicker onPicked={onCountryPickedHandler} />
      </div>
      <div ref={searchbar} className={classes.DiscoverElement}>
        {countryPicked ? (
          <SearchBar keywordFetch={onKeywordPickedHandler} />
        ) : null}
      </div>
    </div>
  );
};

export default Discover;
