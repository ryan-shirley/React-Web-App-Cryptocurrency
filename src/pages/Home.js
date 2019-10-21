import React from 'react';
import CryptoCard from '../components/CryptoCard'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            topCoins: []
        }
    }

    componentDidMount() {
        // Get Top 4 coins by market cap
        // Blocked by CORS - Uses Moesif CORS chrome extension to bypass.
        fetch(process.env.REACT_APP_COIN_MARKET_MAP_API_URI + 'cryptocurrency/listings/latest?start=1&limit=4&convert=EUR', { 
            method: 'GET', 
            headers: new Headers({
            'X-CMC_PRO_API_KEY': process.env.REACT_APP_COIN_MARKET_MAP_API_KEY
            })
        })
        .then(res => res.json()) // Parse output to json
        .then((data) => {
            let topCoins = data.data

            // Get Top 4 coins Metadata
            fetch(process.env.REACT_APP_COIN_MARKET_MAP_API_URI + `cryptocurrency/info?id=${topCoins[0].id},${topCoins[1].id},${topCoins[2].id},${topCoins[3].id}`, { 
                method: 'GET', 
                headers: new Headers({
                'X-CMC_PRO_API_KEY': process.env.REACT_APP_COIN_MARKET_MAP_API_KEY
                })
            })
            .then(resp => resp.json()) // Parse output to json
            .then((metadata) => {
                metadata = metadata.data
                // Add metadata to price
                const top4coins = topCoins.map((coin) => {
                    coin.metadata = metadata[coin.id]
                    return coin;
                })

                this.setState({ topCoins: top4coins })
            })
            .catch((err2) => {
                console.log('API call error:', err2.message);
            });
        })
        .catch((err) => {
            console.log('API call error:', err.message);
        });
}

    render() {
        return (
            <div className="row">
                <div className="col-12 text-center mb-3">
                    <h3><strong>Top</strong> Coins 2019</h3>
                </div>
                {this.state.topCoins.map((coin) => (
                    <div className="col-md-6" key={coin.id}>
                        <CryptoCard 
                            coin={coin}/>
                    </div>
                ))}
            </div>
        )
    }
}

export default Home