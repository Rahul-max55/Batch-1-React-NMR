import React from 'react';
import "./App.css";
import CardOne from './CardOne';
// import ritik from "./diwali.jpg";

const App = () => {

    let data = [
        {
            image_url: "https://breathedreamgo.com/wp-content/uploads/2015/09/Anshu-Diwali1.jpg",
            details: "Diwali, The Festival of Light"
        },
        {
            image_url: "https://breathedreamgo.com/wp-content/uploads/2015/03/India-Holi-flying-colo-festival.jpg",
            details: "Holi (Festivals of India)"
        },
        {
            image_url: "https://breathedreamgo.com/wp-content/uploads/2011/08/Ganesh.jpg",
            details: "Ganesh Chaturthi"
        }
    ]


    return (
        <>
            <h1>Top Five Festivals in India</h1>
            <div className="container">
                <CardOne image_url={data[0].image_url} details={data[0].details} />
                <CardOne image_url={data[1].image_url} details={data[1].details} />
                <CardOne image_url={data[2].image_url} details={data[2].details} />
                <CardOne image_url={data[2].image_url} details={data[2].details} />
                <CardOne image_url={data[2].image_url} details={data[2].details} />
                <CardOne image_url={data[2].image_url} details={data[2].details} />
            </div>
            {/* <img src={ritik} alt="" /> */}
        </>
    )
}

export default App