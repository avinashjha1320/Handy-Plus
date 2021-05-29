import React from 'react';
import './SearchPage.css';
import {Button} from "@material-ui/core";
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_info">
                <p>2 vistis . 28 May to 7 June . 2 Patients</p>
                <h1>Nearby Location</h1>
                <Button variant="outlined">Cancellation Flexibity</Button>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Treatment and Facilities</Button>
                <Button variant="outlined">+ More Filters</Button>
            </div>
            <SearchResult 
                img="/h7.jpg"
                location="Sector 5"
                title="Covid Infected Facilities"
                description="All facilities for severe covid patient will be provided. 24 hours nurse facility and flexible visiting hours."
                star={5.0}
                price="Rs. 500"
                total="Rs. 5500 total"
            />
            <SearchResult 
                img="/h1.jpg"
                location="Kolkata"
                title="Covid Infected Facilities"
                description="All facilities for severe covid patient will be provided. 24 hours nurse facility and flexible visiting hours."
                star={4.35}
                price="Rs. 300"
                total="Rs. 3300 total"
            />
            <SearchResult 
                img="/h2.jpg"
                location="Howrah"
                title="Covid Infected Facilities"
                description="All facilities for severe covid patient will be provided. 24 hours nurse facility and flexible visiting hours."
                star={4.0}
                price="Rs. 300"
                total="Rs. 3300 total"
            />
            <SearchResult 
                img="/h3.jpg"
                location="Dum Dum"
                title="Covid Infected Facilities"
                description="All facilities for severe covid patient will be provided. 24 hours nurse facility and flexible visiting hours."
                star={4.35}
                price="Rs. 300"
                total="Rs. 3300 total"
            />
            <SearchResult 
                img="/h4.jpg"
                location="New Town"
                title="Covid Infected Facilities"
                description="All facilities for severe covid patient will be provided. 24 hours nurse facility and flexible visiting hours."
                star={3.75}
                price="Rs. 200"
                total="Rs. 2200 total"
            />
            <SearchResult 
                img="/h5.png"
                location="Rajarhat"
                title="Covid Infected Facilities"
                description="All facilities for severe covid patient will be provided. 24 hours nurse facility and flexible visiting hours."
                star={4.35}
                price="Rs. 300"
                total="Rs. 3300 total"
            />
            <SearchResult 
                img="/h6.jpg"
                location="Salt Lake"
                title="Covid Infected Facilities"
                description="All facilities for severe covid patient will be provided. 24 hours nurse facility and flexible visiting hours."
                star={3.35}
                price="Rs. 200"
                total="Rs. 2200 total"
            />
        </div>
    )
}

export default SearchPage
