import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import About_Us from "../pages/About_Us";
import Services from "../pages/Services";
import ExchangeRate from "../pages/ExchangeRate";
import FAQs from "../pages/Faqs";

const App = () => {
  return (
    <section className="container-all">
      <switch>
        <Route path="/" component={Home} exact />
        <Route path="/About_us" component={About_Us} />
        <Route path="/services" component={Services} />
        <Route path="/exchangerate" component={ExchangeRate} />
        <Route path="/faqs" component={FAQs} />
      </switch>
    </section>
  );
};

export default App;
