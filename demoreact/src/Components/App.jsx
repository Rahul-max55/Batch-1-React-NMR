import React , {useState , useEffect} from "react";
import ApiDemo from "./ApiDemo";
import "./App.css";
import useFetch from "./useFetch";

const App = () => {

   const[apiData] =  useFetch("https://jsonplaceholder.typicode.com/posts");
  
    return (
        <>
            <h1>i am a heading</h1>
            {apiData && apiData.map((val) => {
                return <p>{val.title}</p>
            })}
            <ApiDemo />
        </>

    )
}

export default App;