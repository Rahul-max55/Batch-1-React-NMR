import React, { useContext } from 'react';
import { userContext } from "./App";

const ComC = () => {

    let { demo, setDemo } = useContext(userContext);
    
    const handle = () => {
        setDemo("birla")
    }

    return (
        <>
            <div>{demo}</div>
            <button onClick={handle}>Change Value</button>
        </>
    )
}

export default ComC