import classes from "./Layout.module.css";
import Logo from "../../Components/UI/Logo/Logo";
import Heading from "../../Components/UI/Heading/Heading";
import Discover from "../../Components/UI/Discover/Discover";
import JobLayout from "../../Components/UI/JobLayout/JobLayout";
import { useState, useRef } from "react";


// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  


const Layout = () => {
  const discover = useRef();
  const jobs = useRef();
  const [showDiscover, setShowDiscover] = useState(false);
  const [dataFetchedViaAPI,setdataFetchedViaAPI] = useState("")
  const [showJobs,setShowJobs] = useState(false)



  // Handeling Get started button. 
  const gettingStartedHandler = () => {
    setShowDiscover((prevState) => !prevState);

    //scrolling down to country picker
    discover.current.scrollIntoView(true)

  };


  //function to retrive data from <discover>
  const dataFetch = (data) =>{
    setdataFetchedViaAPI(data)
    setShowJobs(true)
    // jobs.current.scrollIntoView(true)
    // console.log(data);
  }

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
          {showDiscover ? <Discover dataFetchtoLayout={dataFetch} /> : null}
        </section>
        <section ref={jobs}>
          { showJobs? <JobLayout data={dataFetchedViaAPI} /> : null}
        </section>
      </main>
    </div>
  );
};

export default Layout;
