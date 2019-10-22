import React from 'react';
import CryptoList from '../components/CryptoList'

class Home extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 text-center mb-3">
                    <h3><strong>Top</strong> Coins 2019</h3>
                </div>
                <CryptoList 
                    display="card"
                    amount={4} />
            </div>
        )
    }
}

export default Home