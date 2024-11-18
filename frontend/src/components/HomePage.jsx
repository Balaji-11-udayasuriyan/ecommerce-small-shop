import React from "react";
import PopularProduct from "./slider/PopularProduct";
import DailyBestSells from "./slider/DailyBestSells";
import DealOfTheDay from "./slider/DealOfTheDay";

const HomePage = () => {
  return (
    <div>
      {/* Popular Products Section */}
      
        <PopularProduct />
     

      {/* Daily Best Sells Section */}

        <DailyBestSells />
     

<DealOfTheDay/>      
   </div>
  );
};

export default HomePage;
