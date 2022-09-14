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
import Sermons from "./components/pages/Sermons";
import About from "./components/pages/About";

const App = () => {
    return (
        <Router>
            <Header />
            <div className="content">
                <Routes>
                    <Route path='/about-page' element={<About />}/>
                    <Route path='/sermons' element={<Sermons />}/>
                    <Route path='/' exact element={<Main />} />
                    <Route path='*' exact element={<h1 style={{textAlign: 'center', fontSize: '60px', fontFamily: 'Roboto-Condensed'}}>This page does not exist</h1>} />
                </Routes>
            </div>
            <Footer />
        </Router>
    )
}

export default App