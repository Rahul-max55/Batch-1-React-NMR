import React, { useState } from 'react';
import { useEffect } from 'react';


const HooksDemo = () => {



    let [val, setVal] = useState({
        ritik: 1,
        car: "BMW",
        city: "Indore"
    });
    // console.log(val.ritik);

    const increment = () => {
        let sum = val.ritik + 1;
        setVal({
            ...val,
            ritik: sum
        })
    }

    const changeCar = (e) => {
        let name = e.target.value;
        name === "carButton" ? val.car === "BMW" ? setVal({ ...val, car: "Honda" }) : setVal({ ...val, car: "BMW" }) :
            val.city === "indore" ? setVal({ ...val, city: "pune" }) : setVal({ ...val, city: "indore" });
    }


    return (
        <>
            <h1>{val.ritik}</h1>
            <h1>{val.car}</h1>
            <h1>{val.city}</h1>
            <button onClick={increment}>+</button>
            <button onClick={changeCar} value="carButton" >Change car name</button>
            <button onClick={changeCar}>Change City name</button>

            {/* <h1>{val}</h1>
            <h1>{car}</h1>
            <h1>{city}</h1>
            <button onClick={increment}>+</button> */}
            {/* <button onClick={changeCar} value="carButton" >Change car name</button>
            <button onClick={changeCar}>Change city name</button> */}
        </>
    )
}

export default HooksDemo