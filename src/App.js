import React from 'react'
import './styles/main.scss'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Header />
            <Main />
            <Footer />
        </Router>
    )
}

export default App