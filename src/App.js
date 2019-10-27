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
        <main className="bg-danger">
            <BrowserRouter>
                <CryptoNav />
                <div className="bg-light mx-4 mt-n3 position-relative pt-5" style={{zIndex:1}}>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/list" component={List} />
                            <Route path="/coin/:slug" component={Coin} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </main>
    );
}

export default App;
