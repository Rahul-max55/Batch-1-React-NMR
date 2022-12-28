import React from 'react'

const Button = () => {
    // const as = (v) => {
    //     console.log(v);
    // }

    // as("hello")

    const show = (a) => {
        console.log(a.target.value);
    }

    const direct = (a) => {
        console.log(a.target.value);
    }

    return (
        <>
            <button onClick={(e) => { show(e) }} name="ritik" value="1" >Click Here 1</button>
            <button onClick={(e) => { show(e) }} value="2">Click Here 2</button>
            <button onClick={direct} value="3" >Click Here direct</button>
        </>
    )
}

export default Button