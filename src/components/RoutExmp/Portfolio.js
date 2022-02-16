import React from "react";
import img from "./img/Portfolio.JPG";

class Portfolio extends React.Component {

    render() {
        return (
            <div>
                <img src={img} alt="home" />
            </div>
        )
    }

}

export default Portfolio;