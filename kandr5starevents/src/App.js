import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages";

const App = () => {
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
