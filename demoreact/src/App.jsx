import React from 'react';
import Nandini, { name1, name2, demoImport } from './Heading';
// import * as data from "./Heading";
import List from './List';
import Para from './Para';
import "./App.css";

const App = () => {
    return (
        <>
            <div className="container">
                {name1} {name2} {demoImport()}
                <Nandini/>
                <List />
                <Para />
                <List />
                <Para />
            </div>
        </>
  )
}

export default App