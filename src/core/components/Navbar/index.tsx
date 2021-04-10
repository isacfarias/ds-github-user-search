import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => (
    <nav className="nav-main-menu">
        <div className="nav-main-title">
            <Link to="/" className="nav-logo-text">
                <h4 className="nav-title">Bootcamp DevSuperior</h4>
            </Link>
        </div>
    </nav>
);

export default Navbar;