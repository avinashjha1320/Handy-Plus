import React, {useState} from 'react'
import './Banner.css'
import Search from './Search';
import {useHistory} from "react-router-dom";
import {Button} from '@material-ui/core';

function Banner() {
    const history=useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <Search />}
                <Button onClick={()=>setShowSearch(!showSearch)} className="banner_searchButton" variant="outlined">{showSearch ? "Hide" : "Book Now"}</Button>
            </div>
            <div className="banner_info">
                <h2>a HAND for YOU <span className="banner_span">+</span></h2>
                <h5>Look before you get admitted.</h5>
                <Button onClick={() => history.push('/search')} variant='outlined'>Nearby Hospitals</Button>
            </div>
        </div>
    )
}

export default Banner
