import React from "react";
import { Link } from 'react-router-dom'
import './style.css';

const NavBar = () => {

    return (
        <>

            <TabBtn link="/pr" name="Projects" />
            <TabBtn link="/pr" name="Projects" />
            <TabBtn link="/pr" name="Projects" />
            <TabBtn link="/pr" name="Projects" />

        </>
    )
}

const TabBtn = (props) => {

    return (
        <div className="text-fontcol">
            <Link to={props.link}>{props.name}</Link>
        </div>
    )
}


export default NavBar