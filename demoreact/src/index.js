// let h1 = document.createElement("h1");
// h1.innerHTML = "hello i am a heading";
// document.getElementById("root").appendChild(h1);

import React from 'react';
import ReactDOM from "react-dom/client";

// ReactDOM.render(
//     <>
//         <h1>I am a heading</h1>
//         <p>I am a heading</p>
//     </>
//     , document.getElementById("root"));

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <h1>I am a heading</h1>
    </>
)


