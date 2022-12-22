import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

let root = ReactDOM.createRoot(document.getElementById("root"));


let dt = new Date(2022, 12, 22, 19);
let hour = dt.getHours();

let greet;
let color_change = { backgroundColor: "red" };

if (hour <= 12) {
    greet = "Good Morning"
    color_change.backgroundColor = "red"
} else if (hour > 12 && hour <= 18) {
    greet = "Good Afternoon";
    color_change.backgroundColor = "blue"
} else {
    greet = "Good Night"
    color_change.backgroundColor = "yellow"
}



root.render(
    <>
        <div className="container" style={color_change}>
            <h1>Hello! {greet}</h1>
        </div>
    </>
)
