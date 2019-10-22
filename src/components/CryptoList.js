import React from 'react';
import PropTypes from 'prop-types';
import CryptoInfo from '../components/CryptoInfo'
import CryptoCard from '../components/CryptoCard'

class CryptoList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            coins: [],
            currency: 'EUR',
            display: this.props.display,
            amount: this.props.amount
        }

        // Binding this to work in the callback
        this.currencyChange = this.currencyChange.bind(this)
    }

    componentDidMount() {
        // Blocked by CORS - Uses Moesif CORS chrome extension to bypass.
        fetch(process.env.REACT_APP_COIN_MARKET_MAP_API_URI + 'cryptocurrency/listings/latest?start=1&limit='+ this.state.amount +'&convert=' + this.state.currency, { 
            method: 'GET', 
            headers: new Headers({
              'X-CMC_PRO_API_KEY': process.env.REACT_APP_COIN_MARKET_MAP_API_KEY
            })
        })
        .then(res => res.json()) // Parse output to json
        .then((data) => {
            if(this.state.display === 'card') {
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

                    this.setState({ coins: top4coins })
                })
                .catch((err2) => {
                    console.log('API call error:', err2.message);
                });
            }
            else {
                this.setState({ coins: data.data })
            }
        })
        .catch(console.log)
    }

    currencyChange(event) {
        console.log('Currency Change')
        const newCurrency = event.target.value
        console.log(newCurrency)
        
        // Blocked by CORS - Uses Moesif CORS chrome extension to bypass.
        fetch(process.env.REACT_APP_COIN_MARKET_MAP_API_URI + 'cryptocurrency/listings/latest?start=1&limit=100&convert=' + newCurrency, { 
            method: 'GET', 
            headers: new Headers({
              'X-CMC_PRO_API_KEY': process.env.REACT_APP_COIN_MARKET_MAP_API_KEY
            })
          })

        .then(res => res.json()) // Parse output to json
        .then((data) => {
            this.setState({ 
                coins: data.data,
                currency: newCurrency
            })
        })
        .catch(console.log)
    }

    render() {
        if(this.state.display === 'table') {
            return (
                <div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="currency">Currency</label>
                            <select className="form-control" id="currency" onChange={this.currencyChange}>
                                <option value="EUR">EUR</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>
                    </form>
            
                    
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
                            key={coin.slug}
                            coin={coin}
                            currency={this.state.currency} />
                        ))}
                        </tbody>
                    </table>
                </div>
            )
        }
        else if(this.state.display === 'card') {
            return (
                this.state.coins.map((coin) => (
                    <div className="col-md-6" key={coin.id}>
                        <CryptoCard 
                            coin={coin}/>
                    </div>
                ))
            )
        }
    }
}

CryptoList.propTypes = {
    display: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}     


export default CryptoList