import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
        <Link to="/"><img className="header_icon" src="/logo.jpg" alt="Handy PLus" /></Link>
            <div className="header_center">
                <input type="text"/>
                <SearchIcon/>
            </div>

            <div className="header_right">
                <p>Call Ambulance</p>
                <Avatar/>
                <ExpandMoreIcon/>
            </div>
        </div>
    )
}

export default Header
