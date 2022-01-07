import classes from "./Layout.module.css";
import Logo from "../../Components/UI/Logo/Logo";
import Heading from "../../Components/UI/Heading/Heading";
import Discover from "../../Components/UI/Discover/Discover";

const Layout = () => {
  return (
    <div className={classes.Layout}>
      <header>
        <Logo />
      </header>
      <main>
        <Heading />
        <Discover />
      </main>
    </div>
  );
};

export default Layout;
