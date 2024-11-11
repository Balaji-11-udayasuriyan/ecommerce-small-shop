import React, { Children } from "react";

import Footer from "./Footer";

import Header from "./Header";

import TopBar from "./TopNavBar";

const AppLayout = ({ children }) =>{

    return(

        <div>

            <Header/>

            <TopBar/>

            <main>

                {children}

            </main>

            <Footer/>

        </div>
        

    )
};

export default AppLayout;