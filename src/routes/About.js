import React from "react";
import "./About.css";

function About(props) {
    console.log(props);
    return (
        <div className="about">
            <span className="quote">"You can't repeat the past?</span>
            <span className="quote">Why of course you can."</span>
            <span className="author">-Jay Gatsby</span>
        </div>
    )
}

export default About;