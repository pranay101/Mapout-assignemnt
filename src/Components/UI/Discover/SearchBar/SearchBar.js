import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={classes.SearchBar}>
      <p>
        <span>Enter Some Keywords You're Looking for</span>
      </p>
      <div className={classes.SearchBar__container}>
        <input type="text" placeholder="Enter Keywords" />
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
