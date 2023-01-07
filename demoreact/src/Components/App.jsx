import React, { createContext, useState } from "react";
import "./App.css";
import ComA from "./ComA";


let userContext = createContext();

const App = () => {
    const [demo, setDemo] = useState("Rahul")
    return (
        <>
            <userContext.Provider value={{ demo, setDemo }}>
                <ComA />
            </userContext.Provider>
        </>
    )
}

export default App;
export { userContext };