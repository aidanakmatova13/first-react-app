import React from "react";

const Greeting = ({name,age}) =>{
    return (<div>
        <h5>Привет, {name} </h5>
        <h6>Мне {age} лет </h6>
    </div>)
}

export default Greeting