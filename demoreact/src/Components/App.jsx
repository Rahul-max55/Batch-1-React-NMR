import React from "react";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";


const App = () => {
    return (
        <>
            <BrowserRouter>

                <Navbar />

                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />

                </Routes>

            </BrowserRouter>
        </>
    )
}

export default App