import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Theme Context
import { ThemeContext } from "../ThemeContext";

class CryptoCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.coin.name + ' (' + this.props.coin.symbol + ')',
            currency: this.props.currency,
            price: this.props.coin.quote[this.props.currency].price.toFixed(2),
            description: this.props.coin.metadata.description,
            logo: this.props.coin.metadata.logo,
            link: "coin/" + this.props.coin.slug
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            this.setState({
                currency: nextProps.currency,
                price: nextProps.coin.quote[nextProps.currency].price.toFixed(4)
            });
        }
    }

    static contextType = ThemeContext;

    render() {
        const themeStyle = this.context;

        return (
            <div className={"card crypto-card mb-4 " + themeStyle}>
                <div className="card-body">
                    <h5 className="card-title float-left">{this.state.name}</h5>
                    <p className="price float-right"><span className="currency">{this.state.currency}</span>{this.state.price}</p>

                    <div className="clearfix"></div>

                    <p className="card-text">{this.state.description.substring(0, 170)}...</p>
                </div>
                <div className="card-footer">
                    <img src={this.state.logo} alt={this.state.name} className="rounded-circle float-left" width="25" />
                    <p className="float-left ml-3 mb-0">Read more about {this.state.name}</p>
                    <Link to={{
                        pathname: this.state.link,
                        state: this.props.coin
                        }} className="btn btn-sm btn-dark float-right text-uppercase" role="button" aria-disabled="true">More info</Link>
                </div>
            </div>
        )
    }
}

CryptoCard.propTypes = {
    coin: PropTypes.object.isRequired
}      

export default CryptoCard