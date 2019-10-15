import React from 'react';
import { withRouter} from 'react-router-dom';

class CryptoInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.name,
            currency: this.props.currency,
            price: this.props.price,
            volume24hr: this.props.volume24hr,
            change24h: this.props.change24h,
            change7day: this.props.change7day
        }

        this.sendToCrypto = this.sendToCrypto.bind(this);
    }

    sendToCrypto = () => {
        this.props.history.push("/crypto/id");
    }

    formatNumber(num) {
        return parseFloat(num).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    render() {
        return (
            <tr onClick={this.sendToCrypto}>
                <th scope="row"><img src="#" alt="" className="rounded-circle float-left" /> {this.state.name}</th>
                <td><span className="currency">{this.state.currency}</span>{this.state.price}</td>
                <td><span className={"badge badge-pill " + (this.state.change24h > 0 ? 'badge-success' : 'badge-danger')}>{this.state.change24h}</span></td>
                <td><span className={"badge badge-pill " + (this.state.change7day > 0 ? 'badge-success' : 'badge-danger')}>{this.state.change7day}</span></td>
                <td><span className="currency">{this.state.currency}</span>{this.formatNumber(this.state.volume24hr)}</td>
            </tr>
        )
    }
}

export default withRouter(CryptoInfo)