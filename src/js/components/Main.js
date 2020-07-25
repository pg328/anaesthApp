import React from 'react'

const Main = (props) => {
    return <div className={"main"}>
        <div className={"container"}>
            {props.content ? props.content : "Loading..."}
        </div>
    </div>
};

export default Main;