import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Settings from "./components/Settings";

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Navbar />
                <Sidebar />
                <div className="content-wrapper">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
