import React from 'react';
import {Link} from 'react-router-dom';

class CryptoCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.name,
            currency: this.props.currency,
            price: this.props.price,
            description: this.props.description,
            image: this.props.image,
            link: this.props.link
        }
    }

    render() {
        return (
            <div className="card text-white bg-primary crypto-card">
                <div className="card-body">
                    <h5 className="card-title float-left">{this.state.name}</h5>
                    <p className="price float-right"><span className="currency">{this.state.currency}</span>{this.state.price}</p>

                    <div className="clearfix"></div>

                    <p className="card-text">{this.state.description}</p>
                </div>
                <hr />
                <div className="card-body">
                    <img src={this.state.image} alt={this.state.name} className="rounded-circle float-left" />
                    <p className="float-left">Read more about {this.state.name}</p>
                    <Link to={this.state.link} className="btn btn-sm btn-light float-right text-uppercase" role="button" aria-disabled="true">More info</Link>
                </div>
            </div>
        )
    }
}

export default CryptoCard