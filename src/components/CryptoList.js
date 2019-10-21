import React from 'react';
import CryptoInfo from '../components/CryptoInfo'

class CryptoList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            coins: []
        }
    }

    componentDidMount() {
        // Blocked by CORS - Uses Moesif CORS chrome extension to bypass.
        fetch(process.env.REACT_APP_COIN_MARKET_MAP_API_URI + 'cryptocurrency/listings/latest?start=1&limit=100&convert=EUR', { 
            method: 'GET', 
            headers: new Headers({
              'X-CMC_PRO_API_KEY': process.env.REACT_APP_COIN_MARKET_MAP_API_KEY
            })
          })

        .then(res => res.json()) // Parse output to json
        .then((data) => {
          this.setState({ coins: data.data })
        })
        .catch(console.log)
    }

    render() {
        return (
            <table className="table table-hover table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">24h Change</th>
                        <th scope="col">7day Change</th>
                        <th scope="col">24h Volume</th>
                    </tr>
                </thead>
                <tbody>

                {this.state.coins.map((coin) => (
                    <CryptoInfo
                    key={coin.id}
                    name={coin.name + ' (' + coin.symbol + ')'}
                    currency="€"
                    price={coin.quote.EUR.price.toFixed(4)}
                    volume24hr={coin.quote.EUR.volume_24h}
                    change24h={coin.quote.EUR.percent_change_24h.toFixed(2)}
                    change7day={coin.quote.EUR.percent_change_7d.toFixed(2)} />
                ))}
                </tbody>
            </table>
        )
    }
}

export default CryptoList