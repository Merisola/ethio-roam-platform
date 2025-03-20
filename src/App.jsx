import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route
import Header from "./components/Header";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <Router> 
      <Header />
      <Routes> {/* Use Routes here */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
