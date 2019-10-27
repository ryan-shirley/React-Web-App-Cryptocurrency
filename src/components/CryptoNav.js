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
                <Link to='/' className="navbar-brand text-danger text-uppercase" style={{margin: '0 auto'}}>Crypto<span className="ml-1" style={{fontSize: '12px'}}>King.</span></Link>
            </nav>
        )
    }
}

export default CryptoNav