import React from "react";
import {renderRoutes} from "react-router-config";
import { withRouter } from 'react-router-dom';

class Layout1 extends React.Component {
    constructor(props){
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
        
    }

  
    onButtonClick(e){

        // const value = e.target.attributes[0].nodeValue;
        const value = e.target.getAttribute('link');

        const history = this.props.history;
        history.push(value);
    }
    
    render() {
        return (<>
           
            <div>
                <h3>Страница приветствия</h3>
                <div >
                    <button link='/' onClick={this.onButtonClick}>Home</button>
                    <button link='/about' onClick={this.onButtonClick}>About</button>
                    <button link='/services' onClick={this.onButtonClick}>Services</button>
                    <button link='/portfolio' onClick={this.onButtonClick}>Portfolio</button>
                    <button link='/team' onClick={this.onButtonClick}>Team</button>
                    <button link='/blog' onClick={this.onButtonClick}>Blog</button>
                    <button link='/contact' onClick={this.onButtonClick}>Contact</button>
                </div>
                <br/>               
            </div>
            {renderRoutes(this.props.rroutes.routes)}
        </>

        )
    }

}

export default withRouter(Layout1);