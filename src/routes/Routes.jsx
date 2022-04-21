import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from "../mainPage/MainPage";
import Navbar from "../navbar/Navbar";
import ProductDescription from '../components/ProductDescription';
import {HOME, PRODUCT_DESC} from '../routes/RoutesNomenclature';


export default function Routes() {
  return (
    <Router>
      <Switch>
        <Navbar />
        <MainPage path={HOME} />
        <ProductDescription path={PRODUCT_DESC} />
      </Switch>
    </Router>
  );
}
