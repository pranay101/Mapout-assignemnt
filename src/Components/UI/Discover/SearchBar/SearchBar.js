import classes from "./SearchBar.module.css"

const SearchBar = () => {
  return (
    <div className={classes.SearchInput}>
      <p>Enter Keywords</p>
      <input type="text" placeholder="Text" />
    </div>
  );
};


export default SearchBar