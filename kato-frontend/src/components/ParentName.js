import React from "react";

function ParentName(props) {
    console.log("Name");
    console.log(props);
    return (
        <div>
            <span> {props.name} </span>
        </div>
    );
}
export default ParentName;