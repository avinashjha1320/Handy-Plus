import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className="home">
            <Banner/>
            <h1 className="card_name">Emergency Bank</h1>
            <div className="home_section">
                <Card 
                    src="/oxygen.jpg" 
                    title="Oxygen Facility" description="Check for availability for people you CARE"
                />
                <Card 
                    src="/bed.jpg" 
                    title="Availability of Bed" description="Check for availability for the REQUIRED"
                />
                <Card 
                    src="/vaccine.png" 
                    title="Vaccine Dozes" description="Check for immunity to your loved ONES"
                />
                <Card 
                    src="/blood.jpg" 
                    title="Blood Bank" description="Check for availability for the people in NEED"
                />
                
            </div>
            <h1 className="card_name">Essesntials</h1>
            <div className="home_section">
                <Card 
                        src="/medicine.jpg" 
                        title="Medicine" description="Always there for frontline help." price="Starting with ₹170"
                />
                <Card 
                        src="/ppe.jpg" 
                        title="Sanitation Kit" description="Shields and barrier against the virus." price="Starting with ₹230"
                />
                <Card 
                        src="/vet.png" 
                        title="VET" description="Save the lives of paws, claws, and talons." price="Starting with ₹300"
                />
                <Card 
                        src="/animed.jpg" 
                        title="Veterinary" description="A better treat for your pets." price="Starting with ₹200"
                />
            </div>
        </div>
    )
}

export default Home
