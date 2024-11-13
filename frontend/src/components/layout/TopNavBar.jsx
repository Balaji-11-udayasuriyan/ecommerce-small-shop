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
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>

                    {!isAuthenticated ? (
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login / Register</a>
                        </li>
                    ) : (
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {userName} {/* Display the user's name */}
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Cart</a></li>
                                <li><a className="dropdown-item" href="#">Order</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
                            </ul>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default TopBar;
