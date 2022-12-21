import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

let root = ReactDOM.createRoot(document.getElementById("root"));

let fname = "Random";
let lname = "Images";

let url1 = "https://picsum.photos/200/200?grayscale";
let url2 = "https://picsum.photos/200/200?whale";
let url3 = "https://picsum.photos/200/200?cricket";

let img_border_style = { border: "2px solid red", borderRadius: "10px" };



root.render(
    <>
        <div className="container">
            <h1>{`Hello This is ${fname} ${lname}`}</h1>
            <div className="all_img">
                <img src={url1} alt="random_img" />
                <img src={url2} alt="random_img" />
                <img src={url3} alt="random_img" />
            </div>
            <div className="all_img" style={img_border_style}>
                <img src={url1} alt="random_img" />
                <img src={url2} alt="random_img" />
                <img src={url3} alt="random_img" />
            </div>
        </div>
    </>
)
