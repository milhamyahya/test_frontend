import React from "react";
// import product context

// import components
import { Hero } from "../components/Hero";

const Home = () => {
  // get products from product context
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[20px] max-w-sm
          mx-auto md:max-w-none md:mx-0"
          >
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
