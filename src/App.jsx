import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import "./styles/fishcreek.css";



import LastModified from './components/LastModified'; 


const App = () => {
    return (
        <Router>
            <div id="wrapper">
                <Header />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
                <LastModified />
            </div>
        </Router>
    );
};


export default App;
