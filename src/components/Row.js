import React from "react";

function Row(props) {
    return <div id="border" className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Row;