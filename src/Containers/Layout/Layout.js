import classes from "./Layout.module.css";
import Logo from "../../Components/UI/Logo/Logo";
import Heading from "../../Components/UI/Heading/Heading";
import SearchBar from "../../Components/UI/SearchBar/SearchBar";

const Layout = () => {
  return (
    <div className={classes.Layout}>
      <header>
        <Logo />
      </header>
      <main>
        <Heading />
        <SearchBar />
      </main>
    </div>
  );
};

export default Layout;
