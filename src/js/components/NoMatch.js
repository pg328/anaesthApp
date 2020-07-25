import React from "react";
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const NoMatch = () => {
    return  <div id={"app"}>
        <Header/>
        <Main content={"Not Found!"}/>
        <Footer content={"Sorry!"}/>
    </div>
};

export default NoMatch