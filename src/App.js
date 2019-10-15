import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Pages
import Home from './pages/Home'
import List from './pages/List'

// Components
import CryptoNav from './components/CryptoNav'

function App() {
    return (
        <BrowserRouter>
            <CryptoNav />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/list" component={List} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
