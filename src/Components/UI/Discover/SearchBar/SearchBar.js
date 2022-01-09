import classes from "./SearchBar.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = (props) => {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setTimeout(() => {
      var data = JSON.stringify({
        keyword: keyword,
        location: props.location,
      });

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
          props.dataFetch(JSON.stringify(response.data));
          // console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }, 800);

    return () => {
      console.log("Cleaning up!!");
    };
  }, [keyword]);

  const inputChangedHandler = (event) => {
    setKeyword(event.target.value);
  };
  return (
    <div className={classes.SearchBar}>
      <p>
        <span>Enter Some Keywords You're Looking for</span>
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

// h2 {
//   width: 100%;
//   text-align: center;
//   border-bottom: 1px solid #000;
//   line-height: 0.1em;
//   margin: 10px 0 20px;
// }

// h2 span {
//    background:#fff;
//    padding:0 10px;
// }

// <h2><span>THIS IS A TEST</span></h2>
// <p>this is some content other</p>

// Here you go, updated API:

// curl --location --request POST 'https://staging.mapout.com/mapout-node/api/getemployabilityscore' \

// --header 'Content-Type: application/json' \

// --data-raw '{

// "keyword": "Java",

// "location": "kolkata"

// }'

// const URL =
//         ;
//       const header = {
//         "Content-Type": "application/json",
//         "data-raw": {
//           keyword: keyword,
//           location: props.location,
//         },
//       };

// const getData = {
//   url: "https://staging.mapout.com/mapout-node/api/getemployabilityscore/",
//   headers: {
//     "Content-Type": "application/json",
//     "data-raw": {
//       keyword: keyword,
//       location: props.location,
//     }
//   },
// };
// fetch(getData.url,getData.headers)
// .then(Response => {
//   console.log(Response);
// })
