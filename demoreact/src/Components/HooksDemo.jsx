import React, { useState, useEffect } from 'react';


const HooksDemo = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
        }, 1000);
    },[count])


    return (
        <>
            <h1>{count}</h1>
            <button>+</button>
        </>
    )
}

export default HooksDemo