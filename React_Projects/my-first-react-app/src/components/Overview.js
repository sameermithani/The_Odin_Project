import React, { Component } from "react";
import uniqid from "uniqid";

const Overview = (props) => {
    return (
        <ul>
            {props.tasks.map((task) => {
                return <li key={uniqid()}>{task}</li>;
            })}
        </ul>
    );
};

export default Overview;