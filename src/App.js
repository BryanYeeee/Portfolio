import React from "react";
import './style.css';
import background from "./assets/wallpaper.png";
import { Route, Routes } from "react-router-dom"

import AboutMe from "./AboutMe.js";
import Projects from './Projects.js'
import NavBar from './NavBar.js';
import Title from './Title.js'

const App = () => {
    const [inTitle, setInTitle] = React.useState(true)

    return (
        <>
            <div className="bg-cover bg-center h-screen p-8" style={{ backgroundImage: `url(${background})` }}>

                <Title titleState={inTitle} titleSetter={setInTitle} />

                {
                    !inTitle &&
                    <div className="sm:flex animate-fadein">
                        <div>
                            <div className="text-fontcol text-5xl xl:text-10xl duration-500">
                                <div>BRYAN</div>
                                <div>YEE</div>
                            </div>
                        
                            <NavBar />

                        </div>

                        <Routes>

                            <Route exact path="/ab" Component={AboutMe} />
                            <Route exact path="/pr" Component={Projects} />

                        </Routes>

                    </div>
                }

            </div>
            <div className="text-20xl"><div className="text-10xl"></div></div>
        </>
    )
}

export default App