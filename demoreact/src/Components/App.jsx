import React, { useState, useCallback } from "react";
import "./App.css";
import Todo from "./Todo";

const App = () => {

    const [count, setCount] = useState(0);
    const [todo, setTOdo] = useState(["old item"]);

    const addItems = useCallback(() => {
        return setTOdo([...todo, "newItem"]);
    }, [todo])
    // setTOdo((v) => {[...v, "newItem"]});
    
    // const addItems = () => {
    //     setTOdo([...todo, "newItem"])
    // }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }} >start count</button>
            <br />
            <Todo addItems={addItems} todo={todo} />
        </>

    )
}

export default App;