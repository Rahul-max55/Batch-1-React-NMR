import React, { useState } from 'react';


const HooksDemo = () => {



    let [val, setVal] = useState(1);
    let [car, setCar] = useState("BMW");

    const increment = () => {
        setVal(val + 4);
    }

    const changeCar = () => {
        car === "BMW" ? setCar("honda") : setCar("BMW");
    }


    return (

        <>
            <h1>{val}</h1>
            <h1>{car}</h1>
            <button onClick={increment} >+</button>
            <button onClick={changeCar} >Change car name</button>
        </>
    )
}

export default HooksDemo