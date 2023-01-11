import React, { useReducer } from 'react'

const ComA = () => {

  const initialState = {
    name: "Rahul",
    city: "indore",
  }

  const reducer = (state, action) => {
    const { otherName, otherCity } = action;
    return { ...state, name: otherName, city: otherCity }
  }


  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    e.preventDefault();
    state.name === "Rahul" ? dispatch({ otherName: "ritik", otherCity: "pithampur" }) : dispatch({ otherName: "Rahul", otherCity: "indore" })
  }


  return (
    <>
      <h1>{state?.name}</h1>
      <h1>{state?.city}</h1>
      <button onClick={handleChange} >change name</button>
    </>
  )
}

export default ComA