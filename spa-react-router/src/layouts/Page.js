import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";

const Page = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/product" component={ProductPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={ErrorPage} />
      </Switch>
    </React.Fragment>
  );
};

export default Page;
