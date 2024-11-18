import React from "react";
import PopularProduct from "./slider/PopularProduct";
import DailyBestSells from "./slider/DailyBestSells";
import DealOfTheDay from "./slider/DealOfTheDay";

const HomePage = () => {
  return (
    <div>
      
      {/* Popular Products  */}
      
        <PopularProduct />
     

      {/* Daily Best Sells  */}

        <DailyBestSells />

     {/* Deal of the Day  */}

        <DealOfTheDay/> 

   </div>
  );
};

export default HomePage;
