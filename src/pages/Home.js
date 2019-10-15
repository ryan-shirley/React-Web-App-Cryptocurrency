import React from 'react';
import CryptoCard from '../components/CryptoCard'

class Home extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 text-center mb-3">
                    <h3><strong>Top</strong> Coins 2019</h3>
                </div>
                <div className="col-md-6">
                    <CryptoCard 
                        name="Bitcoin" 
                        currency="€" 
                        price="9,283" 
                        description="Bitcoin (BTC) is a consensus network that enables a new payment system and a completely digital currency. Powered by its users, it is a peer to peer payment network that requires no central authority to operate…" 
                        image="#" 
                        link="/" />
                </div>
                <div className="col-md-6">
                    <CryptoCard 
                        name="Bitcoin" 
                        currency="€" 
                        price="9,283" 
                        description="Bitcoin (BTC) is a consensus network that enables a new payment system and a completely digital currency. Powered by its users, it is a peer to peer payment network that requires no central authority to operate…" 
                        image="#" 
                        link="/" />
                </div>
            </div>
        )
    }
}

export default Home