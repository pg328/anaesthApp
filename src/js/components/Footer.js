import React from 'react'

const Footer = (props) => {
    return <div className={"footer"}>
        {props.content ? props.content : "Footer Content"}
    </div>
};

export default Footer;