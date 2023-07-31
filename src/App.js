import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Routing from "./routes";

const App = () => {
  return (
    <>      
      <Header />
      <Routing />
      <Footer />
    </>
  );
};

export default App;
