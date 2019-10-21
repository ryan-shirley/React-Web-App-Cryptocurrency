import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.scss';

// Pages
import Home from './pages/Home'
import List from './pages/List'
import Coin from './pages/Coin'

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
                    <Route path="/coin/:slug" component={Coin} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
