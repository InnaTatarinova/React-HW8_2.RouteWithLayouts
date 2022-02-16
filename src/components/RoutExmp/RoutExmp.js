import React from "react";
import { renderRoutes } from "react-router-config"
import { BrowserRouter, Switch } from "react-router-dom"
import About from "./About";
import Home from "./Home";
import Portfolio from './Portfolio';
import Team from './Team';
import Blog from './Blog';
import Contact from './Contact';
import Services from "./Services";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";


const constLayout1 = ({ route }) => (
    <div>
        <Layout1 rroutes={route} />
    </div>
);

const constLayout2 = ({ route }) => (
    <div>
        <Layout2 rroutes={route} />
    </div>
);


const constHome = ({ route }) => (
    <div>
        <Home />
    </div>
);

const constAbout = ({ route }) => (
    <div>
        <About />
    </div>
);

const constServices = ({ route }) => (
    <div>
        <Services />
    </div>
);

const constPortfolio = ({ route }) => (
    <div>
        <Portfolio />
    </div>
);

const constTeam = ({ route }) => (
    <div>
        <Team />
    </div>
);

const constBlog = ({ route }) => (
    <div>
        <Blog />
    </div>
);

const constContact = ({ route }) => (
    <div>
        <Contact />
    </div>
);


const routes1 = [
    {
        component: constLayout1,
        routes: [
            {
                path: "/",
                exact: true,
                component: constHome
            },
            {
                path: "/about",
                component: constAbout
            },
            {
                path: "/services",
                component: constServices
            },
            {
                path: "/portfolio",
                component: constPortfolio
            },
            {
                path: "/team",
                component: constTeam
            },
            {
                path: "/blog",
                component: constBlog
            },
            {
                path: "/contact",
                component: constContact
            }
        ]
    }
];

const routes2 = [
    {
        component: constLayout2,
        routes: [
            {
                path: "/",
                exact: true,
                component: constHome
            },
            {
                path: "/about",
                component: constAbout
            },
            {
                path: "/services",
                component: constServices
            },
            {
                path: "/portfolio",
                component: constPortfolio
            },
            {
                path: "/team",
                component: constTeam
            },
            {
                path: "/blog",
                component: constBlog
            },
            {
                path: "/contact",
                component: constContact
            }
        ]
    }
];



class RoutExmp extends React.Component {
    state = {
        layoutValue: ""
    }

    onChangeValue(e) {
        this.setState({
            layoutValue: e.target.value
        })
    }


    selectRoutes() {
        switch (this.state.layoutValue) {
            case "layout1":
                return routes1;
            case "layout2":
                return routes2;

        }
    }

    render() {
        return (
            <div>
                <div onChange={this.onChangeValue.bind(this)} >
                    <input type="radio" name="layout" value="layout1" ></input>
                    Layout1
                    <br></br>
                    <input type="radio" name="layout" value="layout2"></input>
                    Layout2
                </div>

                <BrowserRouter>
                    <Switch>
                        {renderRoutes(this.selectRoutes())}
                    </Switch>

                </BrowserRouter>
            </div>
        )
    }
}

export default RoutExmp;

