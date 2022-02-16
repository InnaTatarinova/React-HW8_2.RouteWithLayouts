import React from "react";
import { renderRoutes } from "react-router-config";
import { withRouter } from 'react-router-dom';
import "./Layout2.css"

class Layout2 extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);

    }


    onButtonClick(e) {

        const value = e.target.getAttribute('link');

        const history = this.props.history;
        history.push(value);
    }

    render() {
        return (
            <div className="workWithLayout2">
                <h3 className="title">Logo</h3>
                <div className="menuNavigation menuButton">
                    <button link='/' onClick={this.onButtonClick}>Home</button>
                    <button link='/about' onClick={this.onButtonClick}>About</button>
                    <button link='/services' onClick={this.onButtonClick}>Services</button>
                    <button link='/portfolio' onClick={this.onButtonClick}>Portfolio</button>
                    <button link='/team' onClick={this.onButtonClick}>Team</button>
                    <button link='/blog' onClick={this.onButtonClick}>Blog</button>
                    <button link='/contact' onClick={this.onButtonClick}>Contact</button>
                </div>

                <div className="info">
                    {renderRoutes(this.props.rroutes.routes)}
                </div>

            </div>

        )
        
    }

}

export default withRouter(Layout2);