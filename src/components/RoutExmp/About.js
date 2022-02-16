import React from "react";
import img from "./img/About.JPG";


class About extends React.Component {
    render() {
        return (
            <>
                <div>
                        <img src={img} alt="about" />
                </div>
            </>
        )
    }

}

export default About;