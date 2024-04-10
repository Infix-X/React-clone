import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Component/Home';
import About from '../src/Component/About/About';
import Contact from '../src/Component/Contact';
import User from '../src/Component/User';
import Layout from './Component/Layout';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/user/:userId" element={<User />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
