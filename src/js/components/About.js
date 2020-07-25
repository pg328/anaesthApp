import React from "react";
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const About = (props) => {
    console.log(props);
    return  <div id={"app"}>
        <Header/>
        <Main content={"About!"}/>
        <Footer content={props.content&&props.content[1][1]}/>
    </div>
};

export default About