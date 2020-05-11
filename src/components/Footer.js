import React, { Component } from "react";

class Footer extends Component {
    render() {
        return ( <
            div className = "ui inverted vertical footer segment"
            style = {
                { marginTop: "3em", padding: "3em 0" } } >
            <
            div className = "ui container smaller"
            style = {
                { fontSize: "0.9em" } } > { new Date().getFullYear() }, Would You Rather app created using React,
            Redux, React Router, Semantic UI, This App is Designed and Developed by Vansh Varshney <
            /div> <
            /div>
        );
    }
}

export default Footer;