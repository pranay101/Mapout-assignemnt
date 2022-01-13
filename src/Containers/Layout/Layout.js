import classes from "./Layout.module.css";
import React from "react";
import Logo from "../../Components/UI/Logo/Logo";
import Heading from "../../Components/UI/Heading/Heading";
import Discover from "../../Components/UI/Discover/Discover";
import JobLayout from "../../Components/UI/JobLayout/JobLayout";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import { useState, useRef } from "react";


const Layout = () => {
  const discover = useRef();
  const jobs = useRef();
  const [showDiscover, setShowDiscover] = useState(false);
  const [hideGetStartedButton, sethideGetStartedButton] = useState(true);
  const [dataFetchedViaAPI, setdataFetchedViaAPI] = useState({
    keyword: null,
    country: null,
    Error: null,
    data: null,
  });
  const [showJobs, setShowJobs] = useState(false);
  const [errorOccured, setError] = useState();

  // Handeling Get started button.
  const gettingStartedHandler = () => {
    setShowDiscover((prevState) => !prevState);


    //scrolling down to country picker
    discover.current.scrollIntoView(true);

    //hide the get started button
    sethideGetStartedButton(false)
  };

  //function to retrive data from <discover>
  const dataFetchtoLayout = (DataFromDiscover) => {
    console.log(DataFromDiscover);
    setdataFetchedViaAPI(DataFromDiscover.data);

    // if we get data then show the card
    if (DataFromDiscover.data) {
      setShowJobs(true);
    }

    // if any error pass it to error boundries
    if (dataFetchedViaAPI.Error) {
      setError(dataFetchedViaAPI.Error);
    }
  };


  // function to retrive error from discover
  const ifErrorOccuredDuringAPIRequest = (error) => {
    setError({
      iserror: true,
      title: error.message,
      description: "Please reload the page....",
    });
  };


  // disable overlay error box
  const errorStateHandler = () => {
    setError(null);
  };

  return (
    <div className={classes.Layout}>
      {errorOccured ? (
        <ErrorBoundary
          title={errorOccured.title}
          description={errorOccured.description}
          onclick={errorStateHandler}
        />
      ) : null }
      <header>
        <Logo />
      </header>
      <main>
        <section id="heading">
          <Heading hideGetStartedButton={hideGetStartedButton} getStarted={gettingStartedHandler} />
        </section>
        <section ref={discover}>
          {showDiscover ? (
            <Discover
              errorOccuredDuringAPIRequest={ifErrorOccuredDuringAPIRequest}
              dataSendtoLayout={dataFetchtoLayout}
            />
          ) : null}
        </section>
        <section ref={jobs}>
          {showJobs ? <JobLayout data={dataFetchedViaAPI} /> : null}
        </section>
      </main>
    </div>
  );
};

export default Layout;
