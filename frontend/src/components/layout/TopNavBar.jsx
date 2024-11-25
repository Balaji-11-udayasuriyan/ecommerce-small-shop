import React, { useState } from "react";

const TopBar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulate authentication
    const [userName, setUserName] = useState("John Doe"); // Simulated user name, you can replace this with actual user data

    const handleLogout = () => {
        // Handle logout logic here
        setIsAuthenticated(false);
        setUserName("");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                </ul>
            </div>
        </nav>
    );
}

export default TopBar;
