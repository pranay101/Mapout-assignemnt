import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={classes.SearchBar}>
      <div className={classes.SearchBar__container}>
        <input type="text" placeholder="Enter Keywords" />
      </div>
    </div>
  );
};

export default SearchBar;
