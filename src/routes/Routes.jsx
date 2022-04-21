import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../mainPage/MainPage";
import Navbar from "../navbar/Navbar";

export default function Routes() {
  return (
    <Router>
      <Navbar />
      <MainPage />
    </Router>
  );
}
