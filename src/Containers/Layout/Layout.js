import classes from "./Layout.module.css";
import React from "react"
import Logo from "../../Components/UI/Logo/Logo";
import Heading from "../../Components/UI/Heading/Heading";
import Discover from "../../Components/UI/Discover/Discover";
import JobLayout from "../../Components/UI/JobLayout/JobLayout";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import { useState, useRef, useEffect } from "react";

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const Layout = () => {
  const discover = useRef();
  const jobs = useRef();
  const [showDiscover, setShowDiscover] = useState(false);
  const [dataFetchedViaAPI, setdataFetchedViaAPI] = useState({
    keyword:null,
    country:null,
    error:null,
    data:null
  });
  const [showJobs, setShowJobs] = useState(false);
  const [error, setError] = useState({});

  // Handeling Get started button.
  const gettingStartedHandler = () => {
    setShowDiscover((prevState) => !prevState);

    //scrolling down to country picker
    discover.current.scrollIntoView(true);
  };

  //function to retrive data from <discover>
  const dataFetchtoLayout = (DataFromDiscover) => {
    setdataFetchedViaAPI(DataFromDiscover.data);
    if (DataFromDiscover.data) {
      setShowJobs(true);
    }
    if(DataFromDiscover.error){
      setError(DataFromDiscover.error)
    }
  };

  const errorStateHandler = () => {
    setError(null);
  };

  useEffect(() => {
    if (!dataFetchedViaAPI.data && dataFetchedViaAPI.country && dataFetchedViaAPI.keyword) {
      setError({
        title: "No Jobs Found",
        description:
          "We couldnt find any jobs about desired keyword in requested city. Kindly look for other Opportunities",
      });
    }
  }, [dataFetchedViaAPI.error, dataFetchedViaAPI.country,dataFetchedViaAPI.data ,dataFetchedViaAPI.keyword]);

  return (
    <div className={classes.Layout}>
      {dataFetchedViaAPI.error && (
        <ErrorBoundary
          title={error.title}
          description={error.description}
          onclick={errorStateHandler}
        />
      )}
      <header>
        <Logo />
      </header>
      <main>
        <section id="heading">
          <Heading getStarted={gettingStartedHandler} />
        </section>
        <section ref={discover}>
          {showDiscover ? <Discover dataSendtoLayout={dataFetchtoLayout} /> : null}
        </section>
        <section ref={jobs}>
          {showJobs ? <JobLayout data={dataFetchedViaAPI} /> : null}
        </section>
      </main>
    </div>
  );
};

export default Layout;
