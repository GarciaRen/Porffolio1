import { React, useEffect, useState } from "react";

import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Spinner from "./components/spinner/Spinner";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, []);
  return !loading ? (
    <div
      className="bg-bodyColor w-full text-lightText"
      transition-style="in:circle:hesitate"
    >
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4">
        <Banner />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default App;
