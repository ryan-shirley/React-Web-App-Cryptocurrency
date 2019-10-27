import React from 'react';
import {Link} from 'react-router-dom';

class CryptoNav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary pb-4">
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