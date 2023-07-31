import React from "react";
import Hero from "../../components/hero";

const Home = () => {
  return (
    <div className="home">
        <Hero />
        <div className="entry-content flex flex-col justify-between items-center">
          <h2 className="heading-2">Quality Products</h2>
          <p className="paragraph-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>          
        </div>
    </div>
  );
};

export default Home;
