import React from 'react';
import PropTypes from 'prop-types';

class Coin extends React.Component {
    constructor(props) {
        super(props)

        const metadata = this.props.location.state.metadata
        delete this.props.location.state.metadata
        const latestMarketData = this.props.location.state

        this.state = {
            latestMarketData: latestMarketData,
            metadata: metadata
        }
    }
    
    componentDidMount() {
        if(this.state.metadata === undefined) {
            // Get Metadata
            fetch(process.env.REACT_APP_COIN_MARKET_MAP_API_URI + `cryptocurrency/info?id=${this.state.latestMarketData.id}`, { 
                method: 'GET', 
                headers: new Headers({
                'X-CMC_PRO_API_KEY': process.env.REACT_APP_COIN_MARKET_MAP_API_KEY
                })
            })
            .then(resp => resp.json()) // Parse output to json
            .then((metadata) => {
                this.setState({ metadata: metadata.data[this.state.latestMarketData.id] })
            })
            .catch((err) => {
                console.log('API call error:', err.message);
            });
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 text-center mb-3">
                    <h3>{this.state.latestMarketData.name + ' ' + this.state.latestMarketData.symbol}</h3>
                </div>
                <div className="col-md-12">
                    <p>Circulating Supply</p>
                </div>
            </div>
        )
    }
}

Coin.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.object.isRequired
    })
}   

export default Coin