import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

// Theme Context
import { ThemeContext } from "../ThemeContext";

class CryptoNav extends React.Component {
    static contextType = ThemeContext;

    render() {
        const themeStyle = this.context;

        return (
            <nav className={"navbar navbar-expand-lg pb-4 " + (themeStyle === 'dark' ? 'bg-light' : themeStyle === 'light' ? 'bg-dark' : '')}>
                <Link to='/' className="navbar-brand">CryptoKing.</Link>
                {/* Add in mobile burger icon here */}
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/list' className="nav-link">List</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default CryptoNav