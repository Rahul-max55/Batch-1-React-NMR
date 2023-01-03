import React from 'react';
import { useState } from 'react';


const Form = () => {

    
    let [result, setResult] = useState({
        name: "",
        email: "",
        contact:""
    });

    let [formVal, setFormVal] = useState("");

    const ChangeVal = (e) => {
       let val =  e.target.value
        let name = e.target.name
        setResult({
            ...result,
            [name]:val
        })
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        setFormVal(result);
    }


    return (
        <>
            {/* <div>OnChnage Data : {result}</div> */}
            <div>After Click data :{formVal.name}</div>
            <form className='formStyle' onSubmit={handleClick}>
                <input type="text" placeholder='Name' name='name' onChange={ChangeVal} />
                <input type="email" placeholder='Email' name='email' onChange={ChangeVal} />
                <input type="text" placeholder='contact Number' name='contact' onChange={ChangeVal} />
                <input type="submit"/>
            </form>
        </>
    )
}

export default Form