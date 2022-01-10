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
          props.dataSendtoLayout({
            data:response.data,
            keyword: keywordPicked,
            country: countryPicked,
            error:null,
          });
          // props.dataFetchtoLayout(JSON.stringify(response.data));
        })
        .catch(function (error) {
          props.dataSendtoLayout({error:error})
        });
    }
  }, [countryPicked, keywordPicked]);

  return (
    <div className={classes.Discover}>
      <div className={classes.DiscoverElement}>
        <CountryPicker countrySendtoDiscover={onCountryPickedHandler} />
      </div>
      <div ref={searchbar} className={classes.DiscoverElement}>
        {countryPicked ? (
          <SearchBar keywordSendtoDiscover={onKeywordPickedHandler} />
        ) : null}
      </div>
    </div>
  );
};

export default Discover;
