import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Joyride from "react-joyride";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import BottomNavigation from "../components/BottomNavigation";
import ScrollToTopButton from "../components/ScrollToTopButton";
import VideoUpload from "../components/VideoUpload";
import { AuthContext } from "../context/AuthenticationContext";
import LoadingSpinner from "../components/LoadingSpinner";

const Layout = ({ children }) => {
  const { isUserLoggedIn } = useContext(AuthContext);

  // Define your walkthrough steps
  const [steps] = useState([
    {
      target: "#navbar",
      content: (
        <>
          <p bold size="lg">
            This is the home page
          </p>
          <p>
            When you click "next", it will stop the tour, navigate to route A,
            and continue the tour.
          </p>
        </>
      ),
      data: {
        next: "/upload",
      },
      disableBeacon: true,
    },
    {
      target: "#upload-button",
      content: (
        <>
          <p bold size="lg">
            This is Route A
          </p>
          <p>
            The loader that appeared in the page was a simulation of a real page
            load, and now the tour is active again
          </p>
        </>
      ),
      data: {
        previous: "/explore",
        next: "/system-design",
      },
    },
    {
      target: "#main-page",
      content: (
        <>
          <p bold size="lg">
            This is Route B
          </p>
          <p>
            Yet another loader simulation and now we reached the last step in
            our tour!
          </p>
        </>
      ),
      data: {
        previous: "/multi-route/a",
        next: "/multi-route",
      },
    },
  ]);

  // State to control the tour
  const [run, setRun] = useState(false);

  const [stepIndex, setStepIndex] = useState(0);
  const [tourActive, setTourActive] = useState(false);

  const navigate = useNavigate();

  const startTour = () => {
    setRun(true);
  };

  // Custom callback function for Joyride
  const handleCallback = (data) => {
    const {
      action,
      index,
      step: {
        data: { next, previous },
      },
      type,
    } = data;
    const isPreviousAction = action === "prev";

    if (type === "step:after") {
      if (index < steps.length - 1) {
        setRun(false);
        navigate(isPreviousAction && previous ? previous : next);
      } else {
        // Logic for the last step
        if (isPreviousAction && previous) {
          setRun(false);
          navigate(previous);
        } else {
          setRun(false);
          setStepIndex(0);
          setTourActive(false);
        }
      }
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Render the Joyride tour */}
      <Joyride
        steps={steps}
        run={run}
        continuous={true}
        scrollToFirstStep={true}
        showProgress={true}
        showSkipButton={true}
        styles={{
          options: {
            zIndex: 10000,
          },
        }}
        callback={handleCallback}
      />

      {/* Top Navigation */}
      <NavBar />
      <div className="flex flex-1" id="main-page">
        {/* Main Content Area */}
        <main className="flex-1 ml-0 mt-16 overflow-auto bg-light-gray mb-20 md:mb-0">
          <div className="mx-auto w-full md:w-10/12">{children}</div>
        </main>
      </div>
      <BottomNavigation />
      {isUserLoggedIn && <ScrollToTopButton />}

      {/* Optional: Button to start the tour
      <button onClick={startTour} className="start-tour-btn">
        Start Walkthrough
      </button> */}
    </div>
  );
};

export default Layout;


