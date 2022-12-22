import React from "react";

let name1 = "mayank";
let name2 = "ritik";

const demoImport = () => {
    let intro = "my name is rahul";
   return intro
}

const Heading = () => {
    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

export default Heading;
export {name1 , name2 , demoImport};