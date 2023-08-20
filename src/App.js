import React from "react";
import './style.css';
import background from "./assets/wallpaper.png";
import { Route, Routes, Link } from "react-router-dom"

import AboutMe from "./AboutMe.js";
import Projects from './Projects.js'
import Main from './Main.js'

const App = () => {
    return (
        <>
            <div className="bg-cover bg-center h-screen p-8" style={{ backgroundImage: `url(${background})` }}>

                <Main />

                <TabBtn link="/pr" name="Projects" />
                <Routes>

                    <Route exact path="/ab" Component={AboutMe} />
                    <Route exact path="/pr" Component={Projects} />

                </Routes>

            </div>
            <div className="text-20xl"><div className="text-10xl"></div></div>
        </>
    )
}


const TabBtn = (props) => {

    return (
        <div className="bg-red-500">
            <Link to={props.link}>{props.name}</Link>
        </div>
    )
}

export default App