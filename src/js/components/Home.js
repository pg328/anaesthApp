import React from "react";
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Home = (props) => {
    console.log(props);
    return  <div id={"app"}>
                <Header/>
                <Main content={props.content&&props.content[1][0]}/>
                <Footer content={props.content&&props.content[1][1]}/>
            </div>
};

export default Home