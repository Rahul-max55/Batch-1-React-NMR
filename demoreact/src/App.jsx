import React from 'react';
import "./App.css";
import CardOne from './CardOne';
import data from "./Api";
// import ritik from "./diwali.jpg";

const App = () => {
    
    return (
        <>
            <h1>Top Five Festivals in India</h1>
            <div className="container">
                {
                    data.map((value , index) => {
                        return <CardOne key={index} details={value.details} image = {value.url} />
                    })
                }
            </div>
        </>
    )
}

export default App