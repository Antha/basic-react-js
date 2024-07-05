import React from "react";
import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <aside className="main-sidebar">
            <div className="sidebar">
                <ul className="nav">
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
