import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages";

const App = () => {
  // Makes it so the page goes to the top of page on refresh
  // useEffect(() => {
  //   window.history.scrollRestoration = "manual";
  // }, []);

  return (
    <Router>
      <Routes>
        {/* React-Router-Dom v6 "Switch" is replaced by "Routes", "component" replaced by "element", and page object {Home} is now {<Home />}  */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
