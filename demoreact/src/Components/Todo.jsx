import React, { memo } from 'react'

const Todo = ({ todo, addItems }) => {

    for (let i = 0; i < 10000; i++) {
        console.log(i);
    }

    return (
        <>
            {todo.map((v , i) => {
               return <h1 key={i} >{v}--</h1>
            })}
            <button onClick={addItems} >Click here</button>
        </>
    )
}

export default memo(Todo)