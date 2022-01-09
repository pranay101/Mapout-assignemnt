import classes from "./Layout.module.css";
import Logo from "../../Components/UI/Logo/Logo";
import Heading from "../../Components/UI/Heading/Heading";
import Discover from "../../Components/UI/Discover/Discover";
import JobLayout from "../../Components/UI/JobLayout/JobLayout";
import { useState, useRef } from "react";


// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  


const Layout = () => {
  const discover = useRef();
  const [showDiscover, setShowDiscover] = useState(false);

  const gettingStartedHandler = () => {
    setShowDiscover((prevState) => !prevState);
    discover.current.scrollIntoView(true)
    // discover.current.scrollIntoView({ behavior: 'smooth',block: "start", inline: "nearest"})
  };

  return (
    <div className={classes.Layout}>
      <header>
        <Logo />
      </header>
      <main>
        <section id="heading">
          <Heading getStarted={gettingStartedHandler} />
        </section>
        <section ref={discover} >
          {showDiscover ? <Discover /> : null}
        </section>
        <section>
          <JobLayout />
        </section>
      </main>
    </div>
  );
};

export default Layout;
