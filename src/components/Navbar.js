import React from "react";

function Navbar() {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#">
                        <i className="fas fa-bars"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
