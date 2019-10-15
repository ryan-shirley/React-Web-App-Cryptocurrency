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
        // Blocked by CORS
        // fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=EUR', { 
        //     method: 'GET', 
        //     headers: new Headers({
        //       'X-CMC_PRO_API_KEY': 'XXXXX', 
        //       'Access-Control-Allow-Origin': '*'
        //     })
        //   })

        // // .then(res => res.json()) // Parse output to json
        // .then((data) => {
        //   this.setState({ coins: data })
        // })
        // .catch(console.log)

        // Coingecko without auth
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => res.json()) // Parse output to json
        .then((data) => {
          this.setState({ coins: data })
        })
        .catch(console.log)


        

        // this.setState({
        //     coins: [
        //         {
        //             "id": 1,
        //             "name": "Bitcoin",
        //             "symbol": "BTC",
        //             "slug": "bitcoin",
        //             "num_market_pairs": 8044,
        //             "date_added": "2013-04-28T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": 21000000,
        //             "circulating_supply": 17993875,
        //             "total_supply": 17993875,
        //             "platform": null,
        //             "cmc_rank": 1,
        //             "last_updated": "2019-10-15T18:36:33.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 7427.292610281529,
        //                     "volume_24h": 13850554203.532795,
        //                     "percent_change_1h": -0.34602089,
        //                     "percent_change_24h": -2.13141758,
        //                     "percent_change_7d": -1.04210352,
        //                     "market_cap": 133645774817.82953,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1027,
        //             "name": "Ethereum",
        //             "symbol": "ETH",
        //             "slug": "ethereum",
        //             "num_market_pairs": 5517,
        //             "date_added": "2015-08-07T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": null,
        //             "circulating_supply": 108159507.5615,
        //             "total_supply": 108159507.5615,
        //             "platform": null,
        //             "cmc_rank": 2,
        //             "last_updated": "2019-10-15T18:36:22.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 163.75805366934281,
        //                     "volume_24h": 6864445726.148964,
        //                     "percent_change_1h": -0.21031776,
        //                     "percent_change_24h": -3.22407908,
        //                     "percent_change_7d": -0.5811123,
        //                     "market_cap": 17711990444.105804,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 52,
        //             "name": "XRP",
        //             "symbol": "XRP",
        //             "slug": "ripple",
        //             "num_market_pairs": 482,
        //             "date_added": "2013-08-04T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": 100000000000,
        //             "circulating_supply": 43166787298,
        //             "total_supply": 99991330383,
        //             "platform": null,
        //             "cmc_rank": 3,
        //             "last_updated": "2019-10-15T18:36:04.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.2605060005124142,
        //                     "volume_24h": 1522622118.536961,
        //                     "percent_change_1h": 0.41236499,
        //                     "percent_change_24h": -1.22436534,
        //                     "percent_change_7d": 3.5559055,
        //                     "market_cap": 11245207113.972061,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 825,
        //             "name": "Tether",
        //             "symbol": "USDT",
        //             "slug": "tether",
        //             "num_market_pairs": 3507,
        //             "date_added": "2015-02-25T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 4108044456.1,
        //             "total_supply": 4207771504.46,
        //             "platform": {
        //                 "id": 83,
        //                 "name": "Omni",
        //                 "symbol": "OMNI",
        //                 "slug": "omni",
        //                 "token_address": "31"
        //             },
        //             "cmc_rank": 4,
        //             "last_updated": "2019-10-15T18:36:17.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.9090796695866921,
        //                     "volume_24h": 17026499048.503864,
        //                     "percent_change_1h": -0.07604707,
        //                     "percent_change_24h": -0.16179782,
        //                     "percent_change_7d": -0.89868743,
        //                     "market_cap": 3734539696.7988305,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1831,
        //             "name": "Bitcoin Cash",
        //             "symbol": "BCH",
        //             "slug": "bitcoin-cash",
        //             "num_market_pairs": 413,
        //             "date_added": "2017-07-23T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": 21000000,
        //             "circulating_supply": 18058675,
        //             "total_supply": 18058675,
        //             "platform": null,
        //             "cmc_rank": 5,
        //             "last_updated": "2019-10-15T18:36:06.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 200.68325375357367,
        //                     "volume_24h": 1235112974.2244103,
        //                     "percent_change_1h": -0.20290835,
        //                     "percent_change_24h": -3.11093487,
        //                     "percent_change_7d": -4.69854764,
        //                     "market_cap": 3624073657.478317,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2,
        //             "name": "Litecoin",
        //             "symbol": "LTC",
        //             "slug": "litecoin",
        //             "num_market_pairs": 556,
        //             "date_added": "2013-04-28T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": 84000000,
        //             "circulating_supply": 63473379.1355418,
        //             "total_supply": 63473379.1355418,
        //             "platform": null,
        //             "cmc_rank": 6,
        //             "last_updated": "2019-10-15T18:36:04.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 49.701070872091584,
        //                     "volume_24h": 2308416426.2715216,
        //                     "percent_change_1h": -0.12195529,
        //                     "percent_change_24h": -3.7798177,
        //                     "percent_change_7d": -4.98563203,
        //                     "market_cap": 3154694914.9067025,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1839,
        //             "name": "Binance Coin",
        //             "symbol": "BNB",
        //             "slug": "binance-coin",
        //             "num_market_pairs": 273,
        //             "date_added": "2017-07-25T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": 187536713,
        //             "circulating_supply": 155536713,
        //             "total_supply": 187536713,
        //             "platform": null,
        //             "cmc_rank": 7,
        //             "last_updated": "2019-10-15T18:36:05.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 16.803653411911053,
        //                     "volume_24h": 291383215.65635633,
        //                     "percent_change_1h": -0.15103483,
        //                     "percent_change_24h": 1.37805141,
        //                     "percent_change_7d": 14.95360156,
        //                     "market_cap": 2613585018.07988,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1765,
        //             "name": "EOS",
        //             "symbol": "EOS",
        //             "slug": "eos",
        //             "num_market_pairs": 374,
        //             "date_added": "2017-07-01T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 935997728.4914,
        //             "total_supply": 1032697739.7562,
        //             "platform": null,
        //             "cmc_rank": 8,
        //             "last_updated": "2019-10-15T18:36:06.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 2.6875637163993304,
        //                     "volume_24h": 1439752204.4035444,
        //                     "percent_change_1h": 0.00319973,
        //                     "percent_change_24h": -6.48367754,
        //                     "percent_change_7d": -6.86666876,
        //                     "market_cap": 2515553533.725678,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 3602,
        //             "name": "Bitcoin SV",
        //             "symbol": "BSV",
        //             "slug": "bitcoin-sv",
        //             "num_market_pairs": 157,
        //             "date_added": "2018-11-09T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": 21000000,
        //             "circulating_supply": 17854985.7508877,
        //             "total_supply": 17854985.7508877,
        //             "platform": null,
        //             "cmc_rank": 9,
        //             "last_updated": "2019-10-15T18:36:12.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 81.29988034661046,
        //                     "volume_24h": 273052487.06748384,
        //                     "percent_change_1h": 0.84579442,
        //                     "percent_change_24h": 3.01120309,
        //                     "percent_change_7d": 5.70629298,
        //                     "market_cap": 1451608205.1376047,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 512,
        //             "name": "Stellar",
        //             "symbol": "XLM",
        //             "slug": "stellar",
        //             "num_market_pairs": 299,
        //             "date_added": "2014-08-05T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 20033073297.8062,
        //             "total_supply": 105423795555.635,
        //             "platform": null,
        //             "cmc_rank": 10,
        //             "last_updated": "2019-10-15T18:36:03.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.05766848734473993,
        //                     "volume_24h": 210152963.2532209,
        //                     "percent_change_1h": -0.23139319,
        //                     "percent_change_24h": -0.20051466,
        //                     "percent_change_7d": 2.67078242,
        //                     "market_cap": 1155277033.9507842,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1958,
        //             "name": "TRON",
        //             "symbol": "TRX",
        //             "slug": "tron",
        //             "num_market_pairs": 282,
        //             "date_added": "2017-09-13T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": null,
        //             "circulating_supply": 66682072191.4,
        //             "total_supply": 99281283754.3,
        //             "platform": null,
        //             "cmc_rank": 11,
        //             "last_updated": "2019-10-15T18:36:06.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.014241964242993517,
        //                     "volume_24h": 565921176.2131374,
        //                     "percent_change_1h": -0.11022077,
        //                     "percent_change_24h": -5.58725723,
        //                     "percent_change_7d": -6.7304891,
        //                     "market_cap": 949683687.7986312,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2010,
        //             "name": "Cardano",
        //             "symbol": "ADA",
        //             "slug": "cardano",
        //             "num_market_pairs": 112,
        //             "date_added": "2017-10-01T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": 45000000000,
        //             "circulating_supply": 25927070538,
        //             "total_supply": 31112483745,
        //             "platform": null,
        //             "cmc_rank": 12,
        //             "last_updated": "2019-10-15T18:36:05.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.03595806731007774,
        //                     "volume_24h": 42208380.23436092,
        //                     "percent_change_1h": -0.10913253,
        //                     "percent_change_24h": -4.918904,
        //                     "percent_change_7d": -4.14125859,
        //                     "market_cap": 932287347.5585374,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 3957,
        //             "name": "UNUS SED LEO",
        //             "symbol": "LEO",
        //             "slug": "unus-sed-leo",
        //             "num_market_pairs": 23,
        //             "date_added": "2019-05-21T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 999498892.9,
        //             "total_supply": 999498892.9,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3"
        //             },
        //             "cmc_rank": 13,
        //             "last_updated": "2019-10-15T18:36:13.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.9027193780445242,
        //                     "volume_24h": 7964392.456164675,
        //                     "percent_change_1h": -0.23723122,
        //                     "percent_change_24h": 1.64717735,
        //                     "percent_change_7d": 3.15200349,
        //                     "market_cap": 902267018.9548784,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 328,
        //             "name": "Monero",
        //             "symbol": "XMR",
        //             "slug": "monero",
        //             "num_market_pairs": 121,
        //             "date_added": "2014-05-21T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": null,
        //             "circulating_supply": 17259762.4592444,
        //             "total_supply": 17259762.4592444,
        //             "platform": null,
        //             "cmc_rank": 14,
        //             "last_updated": "2019-10-15T18:36:02.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 47.13182175235844,
        //                     "volume_24h": 70399900.62550321,
        //                     "percent_change_1h": -0.36228424,
        //                     "percent_change_24h": -2.27613785,
        //                     "percent_change_7d": -7.17260879,
        //                     "market_cap": 813484047.7171549,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2502,
        //             "name": "Huobi Token",
        //             "symbol": "HT",
        //             "slug": "huobi-token",
        //             "num_market_pairs": 119,
        //             "date_added": "2018-02-03T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 234205522.919769,
        //             "total_supply": 500000000,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x6f259637dcd74c767781e37bc6133cd6a68aa161"
        //             },
        //             "cmc_rank": 15,
        //             "last_updated": "2019-10-15T18:36:07.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 3.283000664059839,
        //                     "volume_24h": 90767381.70207132,
        //                     "percent_change_1h": 0.09111276,
        //                     "percent_change_24h": -1.07524841,
        //                     "percent_change_7d": 13.51207313,
        //                     "market_cap": 768896887.2720834,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1975,
        //             "name": "Chainlink",
        //             "symbol": "LINK",
        //             "slug": "chainlink",
        //             "num_market_pairs": 100,
        //             "date_added": "2017-09-20T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 350000000,
        //             "total_supply": 1000000000,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x514910771af9ca656af840dff83e8264ecf986ca"
        //             },
        //             "cmc_rank": 16,
        //             "last_updated": "2019-10-15T18:36:04.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 2.1771933595747943,
        //                     "volume_24h": 89062413.5603233,
        //                     "percent_change_1h": -2.36471897,
        //                     "percent_change_24h": -6.12167202,
        //                     "percent_change_7d": -6.27862882,
        //                     "market_cap": 762017675.8511779,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1720,
        //             "name": "IOTA",
        //             "symbol": "MIOTA",
        //             "slug": "iota",
        //             "num_market_pairs": 49,
        //             "date_added": "2017-06-13T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": 2779530283,
        //             "circulating_supply": 2779530283,
        //             "total_supply": 2779530283,
        //             "platform": null,
        //             "cmc_rank": 17,
        //             "last_updated": "2019-10-15T18:36:03.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.2524881469783773,
        //                     "volume_24h": 5812494.909408993,
        //                     "percent_change_1h": -0.03049989,
        //                     "percent_change_24h": -0.84325931,
        //                     "percent_change_7d": 0.79678553,
        //                     "market_cap": 701798450.6249546,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 131,
        //             "name": "Dash",
        //             "symbol": "DASH",
        //             "slug": "dash",
        //             "num_market_pairs": 264,
        //             "date_added": "2014-02-14T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": 18900000,
        //             "circulating_supply": 9096800.68286598,
        //             "total_supply": 9096800.68286598,
        //             "platform": null,
        //             "cmc_rank": 18,
        //             "last_updated": "2019-10-15T18:36:02.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 64.53026209595774,
        //                     "volume_24h": 211613617.88611418,
        //                     "percent_change_1h": 0.06470079,
        //                     "percent_change_24h": -0.11485192,
        //                     "percent_change_7d": -1.69983786,
        //                     "market_cap": 587018932.300029,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2011,
        //             "name": "Tezos",
        //             "symbol": "XTZ",
        //             "slug": "tezos",
        //             "num_market_pairs": 47,
        //             "date_added": "2017-10-02T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 660373611.97278,
        //             "total_supply": 801312599.488106,
        //             "platform": null,
        //             "cmc_rank": 19,
        //             "last_updated": "2019-10-15T18:36:05.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.8229275022041073,
        //                     "volume_24h": 15747244.969404439,
        //                     "percent_change_1h": -0.34452741,
        //                     "percent_change_24h": -2.81397004,
        //                     "percent_change_7d": -0.02368027,
        //                     "market_cap": 543439607.0222641,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 3794,
        //             "name": "Cosmos",
        //             "symbol": "ATOM",
        //             "slug": "cosmos",
        //             "num_market_pairs": 99,
        //             "date_added": "2019-03-14T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 190688439.2,
        //             "total_supply": 237928230.821588,
        //             "platform": null,
        //             "cmc_rank": 20,
        //             "last_updated": "2019-10-15T18:36:12.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 2.6806365652985313,
        //                     "volume_24h": 145274338.64960733,
        //                     "percent_change_1h": 0.38192015,
        //                     "percent_change_24h": -2.07502034,
        //                     "percent_change_7d": 0.95242651,
        //                     "market_cap": 511166402.69922584,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1321,
        //             "name": "Ethereum Classic",
        //             "symbol": "ETC",
        //             "slug": "ethereum-classic",
        //             "num_market_pairs": 220,
        //             "date_added": "2016-07-24T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": 210000000,
        //             "circulating_supply": 114286124,
        //             "total_supply": 114286124,
        //             "platform": null,
        //             "cmc_rank": 21,
        //             "last_updated": "2019-10-15T18:36:04.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 4.138623386090447,
        //                     "volume_24h": 500501042.9570445,
        //                     "percent_change_1h": -0.1802865,
        //                     "percent_change_24h": -5.09678913,
        //                     "percent_change_7d": -2.09510837,
        //                     "market_cap": 472987225.4920327,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1376,
        //             "name": "NEO",
        //             "symbol": "NEO",
        //             "slug": "neo",
        //             "num_market_pairs": 207,
        //             "date_added": "2016-09-08T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": 100000000,
        //             "circulating_supply": 70538831,
        //             "total_supply": 100000000,
        //             "platform": null,
        //             "cmc_rank": 22,
        //             "last_updated": "2019-10-15T18:36:03.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 6.638119762286217,
        //                     "volume_24h": 227267165.32947406,
        //                     "percent_change_1h": -0.26948321,
        //                     "percent_change_24h": -1.80429562,
        //                     "percent_change_7d": -3.02643225,
        //                     "market_cap": 468245208.0696676,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1518,
        //             "name": "Maker",
        //             "symbol": "MKR",
        //             "slug": "maker",
        //             "num_market_pairs": 74,
        //             "date_added": "2017-01-29T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 1000000,
        //             "total_supply": 1000000,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
        //             },
        //             "cmc_rank": 23,
        //             "last_updated": "2019-10-15T18:36:03.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 448.6218239859875,
        //                     "volume_24h": 8484542.663298469,
        //                     "percent_change_1h": -0.32723511,
        //                     "percent_change_24h": -3.24126605,
        //                     "percent_change_7d": 8.25505188,
        //                     "market_cap": 448621823.9859875,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 3408,
        //             "name": "USD Coin",
        //             "symbol": "USDC",
        //             "slug": "usd-coin",
        //             "num_market_pairs": 168,
        //             "date_added": "2018-10-08T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 469015996.316375,
        //             "total_supply": 471743638.96,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
        //             },
        //             "cmc_rank": 24,
        //             "last_updated": "2019-10-15T18:36:12.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.9087879722520732,
        //                     "volume_24h": 186182243.48365274,
        //                     "percent_change_1h": -0.07763585,
        //                     "percent_change_24h": -0.02275275,
        //                     "percent_change_7d": -0.88932613,
        //                     "market_cap": 426236096.24614435,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 3635,
        //             "name": "Crypto.com Coin",
        //             "symbol": "CRO",
        //             "slug": "crypto-com-coin",
        //             "num_market_pairs": 36,
        //             "date_added": "2018-12-14T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 10844748858.4475,
        //             "total_supply": 100000000000,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b"
        //             },
        //             "cmc_rank": 25,
        //             "last_updated": "2019-10-15T18:36:11.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.031089717906481358,
        //                     "volume_24h": 9361562.876481518,
        //                     "percent_change_1h": 0.14826027,
        //                     "percent_change_24h": -0.00133119,
        //                     "percent_change_7d": -2.96263682,
        //                     "market_cap": 337160182.7757685,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 873,
        //             "name": "NEM",
        //             "symbol": "XEM",
        //             "slug": "nem",
        //             "num_market_pairs": 91,
        //             "date_added": "2015-04-01T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 8999999999,
        //             "total_supply": 8999999999,
        //             "platform": null,
        //             "cmc_rank": 26,
        //             "last_updated": "2019-10-15T18:36:02.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.03476478182880741,
        //                     "volume_24h": 23048803.13696707,
        //                     "percent_change_1h": 0.44073695,
        //                     "percent_change_24h": -1.62843896,
        //                     "percent_change_7d": -6.08196018,
        //                     "market_cap": 312883036.42450196,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2566,
        //             "name": "Ontology",
        //             "symbol": "ONT",
        //             "slug": "ontology",
        //             "num_market_pairs": 94,
        //             "date_added": "2018-03-08T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 535851170,
        //             "total_supply": 1000000000,
        //             "platform": null,
        //             "cmc_rank": 27,
        //             "last_updated": "2019-10-15T18:36:08.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.5754801839353686,
        //                     "volume_24h": 88278277.22551219,
        //                     "percent_change_1h": 0.22041543,
        //                     "percent_change_24h": -0.15813939,
        //                     "percent_change_7d": -0.41430588,
        //                     "market_cap": 308371729.8735825,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 74,
        //             "name": "Dogecoin",
        //             "symbol": "DOGE",
        //             "slug": "dogecoin",
        //             "num_market_pairs": 315,
        //             "date_added": "2013-12-15T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": null,
        //             "circulating_supply": 121633521440.924,
        //             "total_supply": 121633521440.924,
        //             "platform": null,
        //             "cmc_rank": 28,
        //             "last_updated": "2019-10-15T18:36:02.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.0022638237345280524,
        //                     "volume_24h": 46806671.40173152,
        //                     "percent_change_1h": -0.44535123,
        //                     "percent_change_24h": -1.25605132,
        //                     "percent_change_7d": 6.14267356,
        //                     "market_cap": 275356852.75219053,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1697,
        //             "name": "Basic Attention Token",
        //             "symbol": "BAT",
        //             "slug": "basic-attention-token",
        //             "num_market_pairs": 155,
        //             "date_added": "2017-06-01T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 1350948750.7463,
        //             "total_supply": 1500000000,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x0d8775f648430679a709e98d2b0cb6250d2887ef"
        //             },
        //             "cmc_rank": 29,
        //             "last_updated": "2019-10-15T18:36:04.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.20187807458919851,
        //                     "volume_24h": 49413407.06131547,
        //                     "percent_change_1h": -0.8653584,
        //                     "percent_change_24h": 5.26231622,
        //                     "percent_change_7d": 7.01570282,
        //                     "market_cap": 272726932.6693461,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1437,
        //             "name": "Zcash",
        //             "symbol": "ZEC",
        //             "slug": "zcash",
        //             "num_market_pairs": 211,
        //             "date_added": "2016-10-29T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": null,
        //             "circulating_supply": 7635493.75,
        //             "total_supply": 7635493.75,
        //             "platform": null,
        //             "cmc_rank": 30,
        //             "last_updated": "2019-10-15T18:36:03.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 33.42864709842889,
        //                     "volume_24h": 145558137.94016242,
        //                     "percent_change_1h": -0.44015555,
        //                     "percent_change_24h": -0.94900013,
        //                     "percent_change_7d": -0.96229718,
        //                     "market_cap": 255244225.9910094,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 3330,
        //             "name": "Paxos Standard",
        //             "symbol": "PAX",
        //             "slug": "paxos-standard",
        //             "num_market_pairs": 101,
        //             "date_added": "2018-09-27T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 253647907.16718,
        //             "total_supply": 253647988.29,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x8e870d67f660d95d5be530380d0ec0bd388289e1"
        //             },
        //             "cmc_rank": 31,
        //             "last_updated": "2019-10-15T18:36:10.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.9094986073551034,
        //                     "volume_24h": 344565190.9191728,
        //                     "percent_change_1h": -0.07902213,
        //                     "percent_change_24h": 0.03556333,
        //                     "percent_change_7d": -0.79538987,
        //                     "market_cap": 230692418.32708675,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 3662,
        //             "name": "HedgeTrade",
        //             "symbol": "HEDG",
        //             "slug": "hedgetrade",
        //             "num_market_pairs": 7,
        //             "date_added": "2019-01-03T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 288393855.057208,
        //             "total_supply": 1000000000.05,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0xF1290473E210b2108A85237fbCd7b6eb42Cc654F"
        //             },
        //             "cmc_rank": 32,
        //             "last_updated": "2019-10-15T18:36:12.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.694773426634347,
        //                     "volume_24h": 359184.144997144,
        //                     "percent_change_1h": -0.36497749,
        //                     "percent_change_24h": -2.40211233,
        //                     "percent_change_7d": -3.21286384,
        //                     "market_cap": 200368386.8983856,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 3077,
        //             "name": "VeChain",
        //             "symbol": "VET",
        //             "slug": "vechain",
        //             "num_market_pairs": 82,
        //             "date_added": "2017-08-22T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 55454734800,
        //             "total_supply": 86712634466,
        //             "platform": null,
        //             "cmc_rank": 33,
        //             "last_updated": "2019-10-15T18:36:10.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.0031648378410393807,
        //                     "volume_24h": 26425914.635700062,
        //                     "percent_change_1h": 0.56347035,
        //                     "percent_change_24h": -2.72310894,
        //                     "percent_change_7d": -2.78597561,
        //                     "market_cap": 175505243.15984342,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2563,
        //             "name": "TrueUSD",
        //             "symbol": "TUSD",
        //             "slug": "trueusd",
        //             "num_market_pairs": 158,
        //             "date_added": "2018-03-06T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 188176688.7,
        //             "total_supply": 188176688.7,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x0000000000085d4780B73119b644AE5ecd22b376"
        //             },
        //             "cmc_rank": 34,
        //             "last_updated": "2019-10-15T18:36:08.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.9097595713443171,
        //                     "volume_24h": 257187009.47877985,
        //                     "percent_change_1h": -0.05414319,
        //                     "percent_change_24h": 0.21159386,
        //                     "percent_change_7d": -0.59105247,
        //                     "market_cap": 171195543.64870498,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1896,
        //             "name": "0x",
        //             "symbol": "ZRX",
        //             "slug": "0x",
        //             "num_market_pairs": 171,
        //             "date_added": "2017-08-16T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 601198565.634059,
        //             "total_supply": 1000000000,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0xe41d2489571d322189246dafa5ebde1f4699f498"
        //             },
        //             "cmc_rank": 35,
        //             "last_updated": "2019-10-15T18:36:05.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.2834832013830244,
        //                     "volume_24h": 46866505.59645378,
        //                     "percent_change_1h": -0.00395585,
        //                     "percent_change_24h": -2.6134321,
        //                     "percent_change_7d": 24.968739,
        //                     "market_cap": 170429694.05282536,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 4172,
        //             "name": "LUNA",
        //             "symbol": "LUNA",
        //             "slug": "luna",
        //             "num_market_pairs": 11,
        //             "date_added": "2019-07-26T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 285451368.605,
        //             "total_supply": 996730994.667,
        //             "platform": null,
        //             "cmc_rank": 36,
        //             "last_updated": "2019-10-15T18:36:13.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.5400027126242369,
        //                     "volume_24h": 1153460.6137239635,
        //                     "percent_change_1h": -0.07645606,
        //                     "percent_change_24h": -11.20272938,
        //                     "percent_change_7d": -15.346496,
        //                     "market_cap": 154144513.36900094,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1684,
        //             "name": "Qtum",
        //             "symbol": "QTUM",
        //             "slug": "qtum",
        //             "num_market_pairs": 173,
        //             "date_added": "2017-05-24T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": 107822406,
        //             "circulating_supply": 96091904.0484598,
        //             "total_supply": 101841924,
        //             "platform": null,
        //             "cmc_rank": 37,
        //             "last_updated": "2019-10-15T18:36:04.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 1.5836113106998133,
        //                     "volume_24h": 136456070.45444953,
        //                     "percent_change_1h": -0.40178382,
        //                     "percent_change_24h": -3.83808352,
        //                     "percent_change_7d": -3.39697198,
        //                     "market_cap": 152172226.1178221,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1168,
        //             "name": "Decred",
        //             "symbol": "DCR",
        //             "slug": "decred",
        //             "num_market_pairs": 44,
        //             "date_added": "2016-02-10T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": 21000000,
        //             "circulating_supply": 10532741.4642026,
        //             "total_supply": 10532741.4642026,
        //             "platform": null,
        //             "cmc_rank": 38,
        //             "last_updated": "2019-10-15T18:36:02.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 14.24069906059811,
        //                     "volume_24h": 7377456.327324153,
        //                     "percent_change_1h": -0.30856921,
        //                     "percent_change_24h": -2.96225761,
        //                     "percent_change_7d": -8.35983922,
        //                     "market_cap": 149993601.47479272,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2577,
        //             "name": "Ravencoin",
        //             "symbol": "RVN",
        //             "slug": "ravencoin",
        //             "num_market_pairs": 44,
        //             "date_added": "2018-03-10T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": 21000000000,
        //             "circulating_supply": 4639075000,
        //             "total_supply": 4639075000,
        //             "platform": null,
        //             "cmc_rank": 39,
        //             "last_updated": "2019-10-15T18:36:07.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.031130015239063117,
        //                     "volume_24h": 20432450.992663004,
        //                     "percent_change_1h": 0.09461018,
        //                     "percent_change_24h": -4.20047874,
        //                     "percent_change_7d": 7.56330093,
        //                     "market_cap": 144414475.44515672,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2453,
        //             "name": "EDUCare",
        //             "symbol": "EKT",
        //             "slug": "educare",
        //             "num_market_pairs": 6,
        //             "date_added": "2018-01-23T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 850000000,
        //             "total_supply": 1000000000,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x4ecdb6385f3db3847f9c4a9bf3f9917bb27a5452"
        //             },
        //             "cmc_rank": 40,
        //             "last_updated": "2019-10-15T18:36:06.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.15601308588397586,
        //                     "volume_24h": 10196318.466721984,
        //                     "percent_change_1h": -1.36042675,
        //                     "percent_change_24h": 6.77184164,
        //                     "percent_change_7d": 7.41661612,
        //                     "market_cap": 132611123.00137947,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2083,
        //             "name": "Bitcoin Gold",
        //             "symbol": "BTG",
        //             "slug": "bitcoin-gold",
        //             "num_market_pairs": 82,
        //             "date_added": "2017-10-23T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": 21000000,
        //             "circulating_supply": 17513923.589,
        //             "total_supply": 17513923.589,
        //             "platform": null,
        //             "cmc_rank": 41,
        //             "last_updated": "2019-10-15T18:36:05.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 7.376041868172932,
        //                     "volume_24h": 11986252.333684273,
        //                     "percent_change_1h": -0.28221618,
        //                     "percent_change_24h": 2.66105859,
        //                     "percent_change_7d": 0.44751425,
        //                     "market_cap": 129183433.66844554,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 3351,
        //             "name": "ZB",
        //             "symbol": "ZB",
        //             "slug": "zb",
        //             "num_market_pairs": 9,
        //             "date_added": "2018-09-27T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 463288810,
        //             "total_supply": 2100000000,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0xbd0793332e9fb844a52a205a233ef27a5b34b927"
        //             },
        //             "cmc_rank": 42,
        //             "last_updated": "2019-10-15T18:36:11.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.27523595311659743,
        //                     "volume_24h": 156418487.04066458,
        //                     "percent_change_1h": 0.77004095,
        //                     "percent_change_24h": -0.54842786,
        //                     "percent_change_7d": 0.79384647,
        //                     "market_cap": 127513737.18860422,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 3704,
        //             "name": "V Systems",
        //             "symbol": "VSYS",
        //             "slug": "v-systems",
        //             "num_market_pairs": 32,
        //             "date_added": "2019-03-05T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 1828155722,
        //             "total_supply": 3743014186,
        //             "platform": null,
        //             "cmc_rank": 43,
        //             "last_updated": "2019-10-15T18:36:12.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.06782147825346481,
        //                     "volume_24h": 2165669.9699212266,
        //                     "percent_change_1h": 0.42531274,
        //                     "percent_change_24h": -2.36482061,
        //                     "percent_change_7d": -6.21735542,
        //                     "market_cap": 123988223.54357027,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2682,
        //             "name": "Holo",
        //             "symbol": "HOT",
        //             "slug": "holo",
        //             "num_market_pairs": 55,
        //             "date_added": "2018-04-29T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 161429066365.118,
        //             "total_supply": 177619433541.141,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x6c6ee5e31d828de241282b9606c8e98ea48526e2"
        //             },
        //             "cmc_rank": 44,
        //             "last_updated": "2019-10-15T18:36:08.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.0007167539773565603,
        //                     "volume_24h": 8731969.996947207,
        //                     "percent_change_1h": -0.81837548,
        //                     "percent_change_24h": -2.20077499,
        //                     "percent_change_7d": 10.71510286,
        //                     "market_cap": 115704925.37815446,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 4279,
        //             "name": "Swipe",
        //             "symbol": "SXP",
        //             "slug": "swipe",
        //             "num_market_pairs": 7,
        //             "date_added": "2019-08-26T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 60135911.1659999,
        //             "total_supply": 300000000,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9"
        //             },
        //             "cmc_rank": 45,
        //             "last_updated": "2019-10-15T18:36:14.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 1.8118711171557114,
        //                     "volume_24h": 29574886.274322484,
        //                     "percent_change_1h": -0.17523277,
        //                     "percent_change_24h": 3.96972631,
        //                     "percent_change_7d": 12.26803747,
        //                     "market_cap": 108958520.54551685,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 3437,
        //             "name": "ABBC Coin",
        //             "symbol": "ABBC",
        //             "slug": "abbc-coin",
        //             "num_market_pairs": 31,
        //             "date_added": "2018-10-12T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": null,
        //             "circulating_supply": 554307761.969837,
        //             "total_supply": 1002169590.0106,
        //             "platform": null,
        //             "cmc_rank": 46,
        //             "last_updated": "2019-10-15T18:36:11.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.19631892105288853,
        //                     "volume_24h": 50819352.7966804,
        //                     "percent_change_1h": -0.06874195,
        //                     "percent_change_24h": -1.94937561,
        //                     "percent_change_7d": -3.37878159,
        //                     "market_cap": 108821101.76115975,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1567,
        //             "name": "Nano",
        //             "symbol": "NANO",
        //             "slug": "nano",
        //             "num_market_pairs": 40,
        //             "date_added": "2017-03-06T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": 133248297.197,
        //             "circulating_supply": 133248297.197,
        //             "total_supply": 133248297.197,
        //             "platform": null,
        //             "cmc_rank": 47,
        //             "last_updated": "2019-10-15T18:36:02.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.7628465528974531,
        //                     "volume_24h": 5210762.756776834,
        //                     "percent_change_1h": -0.24896122,
        //                     "percent_change_24h": 7.05364796,
        //                     "percent_change_7d": 7.33293241,
        //                     "market_cap": 101648004.1961868,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1808,
        //             "name": "OmiseGO",
        //             "symbol": "OMG",
        //             "slug": "omisego",
        //             "num_market_pairs": 194,
        //             "date_added": "2017-07-14T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 140245398.245133,
        //             "total_supply": 140245398.245133,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07"
        //             },
        //             "cmc_rank": 48,
        //             "last_updated": "2019-10-15T18:36:04.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.7229059686572014,
        //                     "volume_24h": 37304774.58505813,
        //                     "percent_change_1h": -0.2861112,
        //                     "percent_change_24h": -3.99174701,
        //                     "percent_change_7d": -11.74217846,
        //                     "market_cap": 101384235.46811284,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 109,
        //             "name": "DigiByte",
        //             "symbol": "DGB",
        //             "slug": "digibyte",
        //             "num_market_pairs": 70,
        //             "date_added": "2014-02-06T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": 21000000000,
        //             "circulating_supply": 12379133220.2302,
        //             "total_supply": 12379133220.2302,
        //             "platform": null,
        //             "cmc_rank": 49,
        //             "last_updated": "2019-10-15T18:36:01.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.007664657956316635,
        //                     "volume_24h": 3763577.787701508,
        //                     "percent_change_1h": 1.30093963,
        //                     "percent_change_24h": -3.89857765,
        //                     "percent_change_7d": 6.90243987,
        //                     "market_cap": 94881821.92874098,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 4030,
        //             "name": "Algorand",
        //             "symbol": "ALGO",
        //             "slug": "algorand",
        //             "num_market_pairs": 58,
        //             "date_added": "2019-06-20T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": null,
        //             "circulating_supply": 413165341.855183,
        //             "total_supply": 2944437184.85518,
        //             "platform": null,
        //             "cmc_rank": 50,
        //             "last_updated": "2019-10-15T18:36:13.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.2258796062560395,
        //                     "volume_24h": 58666325.40578363,
        //                     "percent_change_1h": -1.3858807,
        //                     "percent_change_24h": -6.32079104,
        //                     "percent_change_7d": 12.98274484,
        //                     "market_cap": 93325624.7368907,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2087,
        //             "name": "KuCoin Shares",
        //             "symbol": "KCS",
        //             "slug": "kucoin-shares",
        //             "num_market_pairs": 15,
        //             "date_added": "2017-10-24T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 87801051,
        //             "total_supply": 177801051,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x039b5649a59967e3e936d7471f9c3700100ee1ab"
        //             },
        //             "cmc_rank": 51,
        //             "last_updated": "2019-10-15T18:36:05.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 1.006278284354677,
        //                     "volume_24h": 4033616.8099888237,
        //                     "percent_change_1h": -0.4461684,
        //                     "percent_change_24h": -1.93764451,
        //                     "percent_change_7d": -0.67355768,
        //                     "market_cap": 88352290.9648175,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1214,
        //             "name": "Lisk",
        //             "symbol": "LSK",
        //             "slug": "lisk",
        //             "num_market_pairs": 57,
        //             "date_added": "2016-04-06T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 120970656.512821,
        //             "total_supply": 136002808,
        //             "platform": null,
        //             "cmc_rank": 52,
        //             "last_updated": "2019-10-15T18:36:02.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.7257684884398883,
        //                     "volume_24h": 3227548.4595103627,
        //                     "percent_change_1h": -0.05896785,
        //                     "percent_change_24h": -2.06583731,
        //                     "percent_change_7d": -13.1888701,
        //                     "market_cap": 87796690.52289103,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2222,
        //             "name": "Bitcoin Diamond",
        //             "symbol": "BCD",
        //             "slug": "bitcoin-diamond",
        //             "num_market_pairs": 25,
        //             "date_added": "2017-11-24T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": 210000000,
        //             "circulating_supply": 186492897.953,
        //             "total_supply": 189492897.953,
        //             "platform": null,
        //             "cmc_rank": 53,
        //             "last_updated": "2019-10-15T18:36:05.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.44848048231278237,
        //                     "volume_24h": 2524133.645038218,
        //                     "percent_change_1h": -1.12107171,
        //                     "percent_change_24h": 1.1475362,
        //                     "percent_change_7d": 0.23334034,
        //                     "market_cap": 83638424.82186994,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1104,
        //             "name": "Augur",
        //             "symbol": "REP",
        //             "slug": "augur",
        //             "num_market_pairs": 75,
        //             "date_added": "2015-10-27T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 11000000,
        //             "total_supply": 11000000,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x1985365e9f78359a9b6ad760e32412f4a445e862"
        //             },
        //             "cmc_rank": 54,
        //             "last_updated": "2019-10-15T18:36:02.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 7.473745841814277,
        //                     "volume_24h": 5231812.986999598,
        //                     "percent_change_1h": -0.54207624,
        //                     "percent_change_24h": 0.47386999,
        //                     "percent_change_7d": -3.18601514,
        //                     "market_cap": 82211204.25995705,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 3718,
        //             "name": "BitTorrent",
        //             "symbol": "BTT",
        //             "slug": "bittorrent",
        //             "num_market_pairs": 124,
        //             "date_added": "2019-01-31T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 212116500000,
        //             "total_supply": 990000000000,
        //             "platform": {
        //                 "id": 1958,
        //                 "name": "TRON",
        //                 "symbol": "TRX",
        //                 "slug": "tron",
        //                 "token_address": "1002000"
        //             },
        //             "cmc_rank": 55,
        //             "last_updated": "2019-10-15T18:36:13.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.0003832872224245515,
        //                     "volume_24h": 45748747.891519934,
        //                     "percent_change_1h": -1.12377894,
        //                     "percent_change_24h": -4.13576781,
        //                     "percent_change_7d": -4.09897984,
        //                     "market_cap": 81301544.11541738,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1042,
        //             "name": "Siacoin",
        //             "symbol": "SC",
        //             "slug": "siacoin",
        //             "num_market_pairs": 36,
        //             "date_added": "2015-08-26T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": null,
        //             "circulating_supply": 41817047634,
        //             "total_supply": 41817047634,
        //             "platform": null,
        //             "cmc_rank": 56,
        //             "last_updated": "2019-10-15T18:36:02.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.0019397977643783905,
        //                     "volume_24h": 5862301.890599688,
        //                     "percent_change_1h": -0.71160175,
        //                     "percent_change_24h": -10.51904777,
        //                     "percent_change_7d": 15.99180388,
        //                     "market_cap": 81116615.51333788,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1274,
        //             "name": "Waves",
        //             "symbol": "WAVES",
        //             "slug": "waves",
        //             "num_market_pairs": 139,
        //             "date_added": "2016-06-02T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 100000000,
        //             "total_supply": 100000000,
        //             "platform": null,
        //             "cmc_rank": 57,
        //             "last_updated": "2019-10-15T18:36:02.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.7836237782642139,
        //                     "volume_24h": 14923164.455022205,
        //                     "percent_change_1h": -0.07384683,
        //                     "percent_change_24h": 0.50676605,
        //                     "percent_change_7d": -5.58867506,
        //                     "market_cap": 78362377.8264214,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2308,
        //             "name": "Dai",
        //             "symbol": "DAI",
        //             "slug": "dai",
        //             "num_market_pairs": 104,
        //             "date_added": "2017-12-24T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 84358670.5377027,
        //             "total_supply": 84358670.5377027,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"
        //             },
        //             "cmc_rank": 58,
        //             "last_updated": "2019-10-15T18:36:06.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.9109176428408903,
        //                     "volume_24h": 19024043.04363989,
        //                     "percent_change_1h": -0.19907886,
        //                     "percent_change_24h": -0.31350799,
        //                     "percent_change_7d": -0.61147049,
        //                     "market_cap": 76843801.3193954,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2099,
        //             "name": "ICON",
        //             "symbol": "ICX",
        //             "slug": "icon",
        //             "num_market_pairs": 62,
        //             "date_added": "2017-10-27T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 497284811.756575,
        //             "total_supply": 800460000,
        //             "platform": null,
        //             "cmc_rank": 59,
        //             "last_updated": "2019-10-15T18:36:05.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.15363584025550955,
        //                     "volume_24h": 17032947.889772803,
        //                     "percent_change_1h": -0.30044753,
        //                     "percent_change_24h": -2.71229714,
        //                     "percent_change_7d": -4.85161695,
        //                     "market_cap": 76400769.9005243,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2585,
        //             "name": "Centrality",
        //             "symbol": "CENNZ",
        //             "slug": "centrality",
        //             "num_market_pairs": 2,
        //             "date_added": "2018-03-13T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 813351203.131312,
        //             "total_supply": 1200000000,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x1122b6a0e00dce0563082b6e2953f3a943855c1f"
        //             },
        //             "cmc_rank": 60,
        //             "last_updated": "2019-10-15T18:36:07.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.09124152432937312,
        //                     "volume_24h": 550936.9502606919,
        //                     "percent_change_1h": 7.09514989,
        //                     "percent_change_24h": -16.71684837,
        //                     "percent_change_7d": 4.41960126,
        //                     "market_cap": 74211403.5888305,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2416,
        //             "name": "THETA",
        //             "symbol": "THETA",
        //             "slug": "theta",
        //             "num_market_pairs": 29,
        //             "date_added": "2018-01-17T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 870502690,
        //             "total_supply": 1000000000,
        //             "platform": null,
        //             "cmc_rank": 61,
        //             "last_updated": "2019-10-15T18:36:06.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.08082012598064107,
        //                     "volume_24h": 2117816.7226795875,
        //                     "percent_change_1h": -2.13367542,
        //                     "percent_change_24h": -7.25801041,
        //                     "percent_change_7d": -4.93462547,
        //                     "market_cap": 70354137.07228695,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 372,
        //             "name": "Bytecoin",
        //             "symbol": "BCN",
        //             "slug": "bytecoin-bcn",
        //             "num_market_pairs": 11,
        //             "date_added": "2014-06-17T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": 184470000000,
        //             "circulating_supply": 184066828814.059,
        //             "total_supply": 184066828814.059,
        //             "platform": null,
        //             "cmc_rank": 62,
        //             "last_updated": "2019-10-15T18:36:01.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.00037048122598370276,
        //                     "volume_24h": 8761.194980064067,
        //                     "percent_change_1h": -0.46331785,
        //                     "percent_change_24h": 2.23674032,
        //                     "percent_change_7d": -4.34725079,
        //                     "market_cap": 68193304.40196492,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 213,
        //             "name": "MonaCoin",
        //             "symbol": "MONA",
        //             "slug": "monacoin",
        //             "num_market_pairs": 22,
        //             "date_added": "2014-03-20T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": null,
        //             "circulating_supply": 65729674.8711679,
        //             "total_supply": 65729674.8711679,
        //             "platform": null,
        //             "cmc_rank": 63,
        //             "last_updated": "2019-10-15T18:36:01.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 1.0015223559941553,
        //                     "volume_24h": 1046033.9718737648,
        //                     "percent_change_1h": -1.51226137,
        //                     "percent_change_24h": -3.37424522,
        //                     "percent_change_7d": -6.54506037,
        //                     "market_cap": 65829738.8357019,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 463,
        //             "name": "BitShares",
        //             "symbol": "BTS",
        //             "slug": "bitshares",
        //             "num_market_pairs": 88,
        //             "date_added": "2014-07-21T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": 3600570502,
        //             "circulating_supply": 2745680000,
        //             "total_supply": 2745680000,
        //             "platform": null,
        //             "cmc_rank": 64,
        //             "last_updated": "2019-10-15T18:36:01.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.023637322580111392,
        //                     "volume_24h": 1986162.790906488,
        //                     "percent_change_1h": -0.19407978,
        //                     "percent_change_24h": -3.90594207,
        //                     "percent_change_7d": -9.91757958,
        //                     "market_cap": 64900523.86176025,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2586,
        //             "name": "Synthetix Network Token",
        //             "symbol": "SNX",
        //             "slug": "synthetix-network-token",
        //             "num_market_pairs": 8,
        //             "date_added": "2018-03-14T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 137483185.536861,
        //             "total_supply": 144711538.461538,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0xc011a72400e58ecd99ee497cf89e3775d4bd732f"
        //             },
        //             "cmc_rank": 65,
        //             "last_updated": "2019-10-15T18:36:07.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.45310645693563606,
        //                     "volume_24h": 51117.84047408699,
        //                     "percent_change_1h": 0.09749123,
        //                     "percent_change_24h": -6.82242069,
        //                     "percent_change_7d": 8.06630677,
        //                     "market_cap": 62294519.08683177,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1521,
        //             "name": "Komodo",
        //             "symbol": "KMD",
        //             "slug": "komodo",
        //             "num_market_pairs": 24,
        //             "date_added": "2017-02-05T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": 200000000,
        //             "circulating_supply": 116407978.75876,
        //             "total_supply": 116407978.75876,
        //             "platform": null,
        //             "cmc_rank": 66,
        //             "last_updated": "2019-10-15T18:36:02.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.5341207344308008,
        //                     "volume_24h": 2135044.992579735,
        //                     "percent_change_1h": -0.53742201,
        //                     "percent_change_24h": -2.36000426,
        //                     "percent_change_7d": -6.85397918,
        //                     "market_cap": 62175915.10823394,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1903,
        //             "name": "HyperCash",
        //             "symbol": "HC",
        //             "slug": "hypercash",
        //             "num_market_pairs": 33,
        //             "date_added": "2017-08-20T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": 84000000,
        //             "circulating_supply": 44370830.577052,
        //             "total_supply": 44370830.577052,
        //             "platform": null,
        //             "cmc_rank": 67,
        //             "last_updated": "2019-10-15T18:36:04.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 1.356360389816303,
        //                     "volume_24h": 4770885.365469546,
        //                     "percent_change_1h": -0.56695978,
        //                     "percent_change_24h": 1.18329908,
        //                     "percent_change_7d": -7.48581704,
        //                     "market_cap": 60182837.057963386,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 3155,
        //             "name": "Quant",
        //             "symbol": "QNT",
        //             "slug": "quant",
        //             "num_market_pairs": 19,
        //             "date_added": "2018-08-10T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 12072738,
        //             "total_supply": 14612493.0808262,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x4a220e6096b25eadb88358cb44068a3248254675"
        //             },
        //             "cmc_rank": 68,
        //             "last_updated": "2019-10-15T18:36:10.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 4.889275403138288,
        //                     "volume_24h": 2946056.6985623627,
        //                     "percent_change_1h": -3.73829327,
        //                     "percent_change_24h": -6.90544773,
        //                     "percent_change_7d": -19.04335415,
        //                     "market_cap": 59026940.95193293,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 291,
        //             "name": "MaidSafeCoin",
        //             "symbol": "MAID",
        //             "slug": "maidsafecoin",
        //             "num_market_pairs": 6,
        //             "date_added": "2014-04-28T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 452552412,
        //             "total_supply": 452552412,
        //             "platform": {
        //                 "id": 83,
        //                 "name": "Omni",
        //                 "symbol": "OMNI",
        //                 "slug": "omni",
        //                 "token_address": "3"
        //             },
        //             "cmc_rank": 69,
        //             "last_updated": "2019-10-15T18:36:01.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.12461517496042389,
        //                     "volume_24h": 273483.821319426,
        //                     "percent_change_1h": 0.00057341,
        //                     "percent_change_24h": 1.58039798,
        //                     "percent_change_7d": -9.17834696,
        //                     "market_cap": 56394898.00014184,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 693,
        //             "name": "Verge",
        //             "symbol": "XVG",
        //             "slug": "verge",
        //             "num_market_pairs": 57,
        //             "date_added": "2014-10-25T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": 16555000000,
        //             "circulating_supply": 15994564179.1206,
        //             "total_supply": 15994564179.1206,
        //             "platform": null,
        //             "cmc_rank": 70,
        //             "last_updated": "2019-10-15T18:36:01.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.0033959180143375424,
        //                     "volume_24h": 2018827.0128104668,
        //                     "percent_change_1h": -0.74328633,
        //                     "percent_change_24h": -2.81119215,
        //                     "percent_change_7d": -2.40292503,
        //                     "market_cap": 54316228.62735361,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1866,
        //             "name": "Bytom",
        //             "symbol": "BTM",
        //             "slug": "bytom",
        //             "num_market_pairs": 49,
        //             "date_added": "2017-08-08T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": null,
        //             "circulating_supply": 1002499275,
        //             "total_supply": 1407000000,
        //             "platform": null,
        //             "cmc_rank": 71,
        //             "last_updated": "2019-10-15T18:36:04.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.051769287917830385,
        //                     "volume_24h": 5380895.357012656,
        //                     "percent_change_1h": 0.40962679,
        //                     "percent_change_24h": -0.93526555,
        //                     "percent_change_7d": -2.27351712,
        //                     "market_cap": 51898673.60489122,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2405,
        //             "name": "IOST",
        //             "symbol": "IOST",
        //             "slug": "iostoken",
        //             "num_market_pairs": 80,
        //             "date_added": "2018-01-16T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 12013965608.8475,
        //             "total_supply": 21000000000,
        //             "platform": null,
        //             "cmc_rank": 72,
        //             "last_updated": "2019-10-15T18:36:07.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.004287912336720002,
        //                     "volume_24h": 10390514.29886996,
        //                     "percent_change_1h": 0.06375575,
        //                     "percent_change_24h": -3.80836606,
        //                     "percent_change_7d": -6.81010182,
        //                     "market_cap": 51514831.34710702,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1700,
        //             "name": "Aeternity",
        //             "symbol": "AE",
        //             "slug": "aeternity",
        //             "num_market_pairs": 54,
        //             "date_added": "2017-06-01T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": null,
        //             "circulating_supply": 287136299.5,
        //             "total_supply": 332957243.49932,
        //             "platform": null,
        //             "cmc_rank": 73,
        //             "last_updated": "2019-10-15T18:36:03.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.1793249424132646,
        //                     "volume_24h": 37787976.12281018,
        //                     "percent_change_1h": -0.45571662,
        //                     "percent_change_24h": 3.0303186,
        //                     "percent_change_7d": 12.34846439,
        //                     "market_cap": 51490700.37259539,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1776,
        //             "name": "MCO",
        //             "symbol": "MCO",
        //             "slug": "crypto-com",
        //             "num_market_pairs": 58,
        //             "date_added": "2017-07-03T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 15793831.0949625,
        //             "total_supply": 31587682.3632061,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0xb63b606ac810a52cca15e44bb630fd42d8d1d83d"
        //             },
        //             "cmc_rank": 74,
        //             "last_updated": "2019-10-15T18:36:03.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 3.1489252365260585,
        //                     "volume_24h": 13078088.363347765,
        //                     "percent_change_1h": -0.77189105,
        //                     "percent_change_24h": -3.26590737,
        //                     "percent_change_7d": 14.57043183,
        //                     "market_cap": 49733593.316357404,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1320,
        //             "name": "Ardor",
        //             "symbol": "ARDR",
        //             "slug": "ardor",
        //             "num_market_pairs": 23,
        //             "date_added": "2016-07-23T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": 998999495,
        //             "circulating_supply": 998999495,
        //             "total_supply": 998999495,
        //             "platform": null,
        //             "cmc_rank": 75,
        //             "last_updated": "2019-10-15T18:36:02.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.04846349364482427,
        //                     "volume_24h": 2263972.8204740053,
        //                     "percent_change_1h": -0.02262155,
        //                     "percent_change_24h": -2.27445912,
        //                     "percent_change_7d": -9.24949997,
        //                     "market_cap": 48415005.67711516,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2694,
        //             "name": "Nexo",
        //             "symbol": "NEXO",
        //             "slug": "nexo",
        //             "num_market_pairs": 23,
        //             "date_added": "2018-05-01T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 560000011,
        //             "total_supply": 1000000000,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206"
        //             },
        //             "cmc_rank": 76,
        //             "last_updated": "2019-10-15T18:36:08.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.08476865650493998,
        //                     "volume_24h": 7821554.229542613,
        //                     "percent_change_1h": 0.40231527,
        //                     "percent_change_24h": 2.29802385,
        //                     "percent_change_7d": -1.42708634,
        //                     "market_cap": 47470448.57522161,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 3218,
        //             "name": "Energi",
        //             "symbol": "NRG",
        //             "slug": "energi",
        //             "num_market_pairs": 8,
        //             "date_added": "2018-08-23T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": null,
        //             "circulating_supply": 21745986.8599914,
        //             "total_supply": 21745986.8599914,
        //             "platform": null,
        //             "cmc_rank": 77,
        //             "last_updated": "2019-10-15T18:36:10.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 2.179101385345266,
        //                     "volume_24h": 304782.19544493104,
        //                     "percent_change_1h": 0.03616699,
        //                     "percent_change_24h": -5.5040903,
        //                     "percent_change_7d": -13.91400319,
        //                     "market_cap": 47386710.09230721,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2874,
        //             "name": "Aurora",
        //             "symbol": "AOA",
        //             "slug": "aurora",
        //             "num_market_pairs": 12,
        //             "date_added": "2018-06-26T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 6542330148.20859,
        //             "total_supply": 10000000000,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x9ab165d795019b6d8b3e971dda91071421305e5a"
        //             },
        //             "cmc_rank": 78,
        //             "last_updated": "2019-10-15T18:36:08.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.006999269369632277,
        //                     "volume_24h": 1628750.2745278762,
        //                     "percent_change_1h": -2.55924989,
        //                     "percent_change_24h": -2.43812502,
        //                     "percent_change_7d": -3.37289355,
        //                     "market_cap": 45791531.01237817,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1455,
        //             "name": "Golem",
        //             "symbol": "GNT",
        //             "slug": "golem-network-tokens",
        //             "num_market_pairs": 92,
        //             "date_added": "2016-11-18T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 980050000,
        //             "total_supply": 1000000000,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0xa74476443119A942dE498590Fe1f2454d7D4aC0d"
        //             },
        //             "cmc_rank": 79,
        //             "last_updated": "2019-10-15T18:36:03.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.04597870493947005,
        //                     "volume_24h": 2549493.8106858167,
        //                     "percent_change_1h": -0.07624647,
        //                     "percent_change_24h": -2.6210863,
        //                     "percent_change_7d": -4.04567963,
        //                     "market_cap": 45061429.775927626,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2539,
        //             "name": "Ren",
        //             "symbol": "REN",
        //             "slug": "ren",
        //             "num_market_pairs": 12,
        //             "date_added": "2018-02-21T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 799513690.023916,
        //             "total_supply": 1000000000,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x408e41876cccdc0f92210600ef50372656052a38"
        //             },
        //             "cmc_rank": 80,
        //             "last_updated": "2019-10-15T18:36:07.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.05584825712854858,
        //                     "volume_24h": 5797449.243013124,
        //                     "percent_change_1h": 0.12049768,
        //                     "percent_change_24h": -6.97853232,
        //                     "percent_change_7d": 25.993934,
        //                     "market_cap": 44651446.13825035,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2447,
        //             "name": "Crypterium",
        //             "symbol": "CRPT",
        //             "slug": "crpt",
        //             "num_market_pairs": 10,
        //             "date_added": "2018-01-22T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 84803056,
        //             "total_supply": 99800607.1428572,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x80a7e048f37a50500351c204cb407766fa3bae7f"
        //             },
        //             "cmc_rank": 81,
        //             "last_updated": "2019-10-15T18:36:06.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.5210757546843396,
        //                     "volume_24h": 376316.9502516112,
        //                     "percent_change_1h": -0.10270563,
        //                     "percent_change_24h": -5.07604485,
        //                     "percent_change_7d": -6.19795367,
        //                     "market_cap": 44188816.40473832,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2469,
        //             "name": "Zilliqa",
        //             "symbol": "ZIL",
        //             "slug": "zilliqa",
        //             "num_market_pairs": 99,
        //             "date_added": "2018-01-25T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": null,
        //             "circulating_supply": 8687360058.0875,
        //             "total_supply": 12533042434.6081,
        //             "platform": null,
        //             "cmc_rank": 82,
        //             "last_updated": "2019-10-15T18:36:07.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.0050839183994601895,
        //                     "volume_24h": 5570218.751372997,
        //                     "percent_change_1h": -0.21396603,
        //                     "percent_change_24h": -2.36704892,
        //                     "percent_change_7d": -9.4855778,
        //                     "market_cap": 44165829.642046586,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2603,
        //             "name": "Pundi X",
        //             "symbol": "NPXS",
        //             "slug": "pundi-x",
        //             "num_market_pairs": 66,
        //             "date_added": "2018-03-22T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 234112000776.377,
        //             "total_supply": 259810708832.63,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3"
        //             },
        //             "cmc_rank": 83,
        //             "last_updated": "2019-10-15T18:36:08.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.00018478437386675568,
        //                     "volume_24h": 1243920.966987089,
        //                     "percent_change_1h": 0.00342749,
        //                     "percent_change_24h": -1.520231,
        //                     "percent_change_7d": -7.33968827,
        //                     "market_cap": 43260239.478156246,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 3829,
        //             "name": "Nash Exchange",
        //             "symbol": "NEX",
        //             "slug": "nash-exchange",
        //             "num_market_pairs": 6,
        //             "date_added": "2019-04-01T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 36196678,
        //             "total_supply": 56296100,
        //             "platform": {
        //                 "id": 1376,
        //                 "name": "NEO",
        //                 "symbol": "NEO",
        //                 "slug": "neo",
        //                 "token_address": "3a4acd3647086e7c44398aac0349802e6a171129"
        //             },
        //             "cmc_rank": 84,
        //             "last_updated": "2019-10-15T18:36:12.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 1.1914285329499659,
        //                     "volume_24h": 2229095.730355506,
        //                     "percent_change_1h": 2.3492468,
        //                     "percent_change_24h": 4.65636567,
        //                     "percent_change_7d": 19.11961674,
        //                     "market_cap": 43125754.967202306,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2130,
        //             "name": "Enjin Coin",
        //             "symbol": "ENJ",
        //             "slug": "enjin-coin",
        //             "num_market_pairs": 48,
        //             "date_added": "2017-11-01T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 776756141.564264,
        //             "total_supply": 1000000000,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c"
        //             },
        //             "cmc_rank": 85,
        //             "last_updated": "2019-10-15T18:36:05.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.05473598964739055,
        //                     "volume_24h": 1973745.1756557212,
        //                     "percent_change_1h": -0.40834111,
        //                     "percent_change_24h": -4.82502519,
        //                     "percent_change_7d": -7.71848914,
        //                     "market_cap": 42516516.12320859,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1230,
        //             "name": "Steem",
        //             "symbol": "STEEM",
        //             "slug": "steem",
        //             "num_market_pairs": 34,
        //             "date_added": "2016-04-18T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 347949601.274,
        //             "total_supply": 364923695.274,
        //             "platform": null,
        //             "cmc_rank": 86,
        //             "last_updated": "2019-10-15T18:36:02.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.12042360636610397,
        //                     "volume_24h": 5126920.145656113,
        //                     "percent_change_1h": -0.29606201,
        //                     "percent_change_24h": -3.5558775,
        //                     "percent_change_7d": -12.36146575,
        //                     "market_cap": 41901345.81906301,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1414,
        //             "name": "Zcoin",
        //             "symbol": "XZC",
        //             "slug": "zcoin",
        //             "num_market_pairs": 41,
        //             "date_added": "2016-10-06T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": 21400000,
        //             "circulating_supply": 8592493.32977799,
        //             "total_supply": 21400000,
        //             "platform": null,
        //             "cmc_rank": 87,
        //             "last_updated": "2019-10-15T18:36:02.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 4.721581217253999,
        //                     "volume_24h": 6628587.8056930015,
        //                     "percent_change_1h": -0.34033371,
        //                     "percent_change_24h": -4.04296817,
        //                     "percent_change_7d": -7.31491479,
        //                     "market_cap": 40570155.11526003,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1759,
        //             "name": "Status",
        //             "symbol": "SNT",
        //             "slug": "status",
        //             "num_market_pairs": 85,
        //             "date_added": "2017-06-28T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 3470483788,
        //             "total_supply": 6804870174,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x744d70fdbe2ba4cf95131626614a1763df805b9e"
        //             },
        //             "cmc_rank": 88,
        //             "last_updated": "2019-10-15T18:36:04.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.011453648315226633,
        //                     "volume_24h": 13315956.261954976,
        //                     "percent_change_1h": -0.55469633,
        //                     "percent_change_24h": -3.08183694,
        //                     "percent_change_7d": -7.86945345,
        //                     "market_cap": 39749700.79144754,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2299,
        //             "name": "aelf",
        //             "symbol": "ELF",
        //             "slug": "aelf",
        //             "num_market_pairs": 71,
        //             "date_added": "2017-12-21T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": 1000000000,
        //             "circulating_supply": 534480099.986466,
        //             "total_supply": 879999999.986466,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0xbf2179859fc6d5bee9bf9158632dc51678a4100e"
        //             },
        //             "cmc_rank": 89,
        //             "last_updated": "2019-10-15T18:36:06.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.07186898143551612,
        //                     "volume_24h": 6279238.293332454,
        //                     "percent_change_1h": -0.19955757,
        //                     "percent_change_24h": -3.1494157,
        //                     "percent_change_7d": -2.6640345,
        //                     "market_cap": 38412540.383580126,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 3701,
        //             "name": "RIF Token",
        //             "symbol": "RIF",
        //             "slug": "rif-token",
        //             "num_market_pairs": 16,
        //             "date_added": "2019-01-16T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 499395823.195994,
        //             "total_supply": 1000000000,
        //             "platform": {
        //                 "id": 3626,
        //                 "name": "RSK Smart Bitcoin",
        //                 "symbol": "RBTC",
        //                 "slug": "rsk-smart-bitcoin",
        //                 "token_address": "0x2acc95758f8b5f583470ba265eb685a8f45fc9d5"
        //             },
        //             "cmc_rank": 90,
        //             "last_updated": "2019-10-15T18:36:12.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.06908470259763026,
        //                     "volume_24h": 6060424.4207665045,
        //                     "percent_change_1h": -3.12007595,
        //                     "percent_change_24h": -18.53646866,
        //                     "percent_change_7d": -28.72476952,
        //                     "market_cap": 34500611.923994,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2830,
        //             "name": "Seele",
        //             "symbol": "SEELE",
        //             "slug": "seele",
        //             "num_market_pairs": 14,
        //             "date_added": "2018-05-31T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 696655691.66178,
        //             "total_supply": 1000000000,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0xb1eef147028e9f480dbc5ccaa3277d417d1b85f0"
        //             },
        //             "cmc_rank": 91,
        //             "last_updated": "2019-10-15T18:36:08.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.04847434690436106,
        //                     "volume_24h": 17407586.91924899,
        //                     "percent_change_1h": -0.12254469,
        //                     "percent_change_24h": -2.41689112,
        //                     "percent_change_7d": -7.38252305,
        //                     "market_cap": 33769929.67051072,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2137,
        //             "name": "Electroneum",
        //             "symbol": "ETN",
        //             "slug": "electroneum",
        //             "num_market_pairs": 20,
        //             "date_added": "2017-11-02T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": 21000000000,
        //             "circulating_supply": 9849201292.29,
        //             "total_supply": 9849201292.29,
        //             "platform": null,
        //             "cmc_rank": 92,
        //             "last_updated": "2019-10-15T18:36:05.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.0033955451307529794,
        //                     "volume_24h": 854388.7275067933,
        //                     "percent_change_1h": -0.36115939,
        //                     "percent_change_24h": -1.17163532,
        //                     "percent_change_7d": -7.71375289,
        //                     "market_cap": 33443407.489841264,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 3871,
        //             "name": "Newton",
        //             "symbol": "NEW",
        //             "slug": "newton",
        //             "num_market_pairs": 12,
        //             "date_added": "2019-04-17T00:00:00.000Z",
        //             "tags": [
        //                 "mineable"
        //             ],
        //             "max_supply": null,
        //             "circulating_supply": 11948333332,
        //             "total_supply": 100000000000,
        //             "platform": null,
        //             "cmc_rank": 93,
        //             "last_updated": "2019-10-15T18:36:13.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.0027751562568237528,
        //                     "volume_24h": 3235035.746055191,
        //                     "percent_change_1h": 1.33923044,
        //                     "percent_change_24h": 1.05589568,
        //                     "percent_change_7d": 3.4244621,
        //                     "market_cap": 33158492.004915595,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1343,
        //             "name": "Stratis",
        //             "symbol": "STRAT",
        //             "slug": "stratis",
        //             "num_market_pairs": 21,
        //             "date_added": "2016-08-12T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 99525469.1700453,
        //             "total_supply": 99525469.1700453,
        //             "platform": null,
        //             "cmc_rank": 94,
        //             "last_updated": "2019-10-15T18:36:02.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.32987784897560696,
        //                     "volume_24h": 808053.5015584418,
        //                     "percent_change_1h": -0.33610004,
        //                     "percent_change_24h": -1.19457793,
        //                     "percent_change_7d": -1.14169191,
        //                     "market_cap": 32831247.688102633,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 3066,
        //             "name": "BitCapitalVendor",
        //             "symbol": "BCV",
        //             "slug": "bitcapitalvendor",
        //             "num_market_pairs": 5,
        //             "date_added": "2018-08-02T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 891199994.51,
        //             "total_supply": 1200000000,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x1014613e2b3cbc4d575054d4982e580d9b99d7b1"
        //             },
        //             "cmc_rank": 95,
        //             "last_updated": "2019-10-15T18:36:09.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.03610912921476902,
        //                     "volume_24h": 857048.1179237955,
        //                     "percent_change_1h": -0.53740303,
        //                     "percent_change_24h": -4.08100933,
        //                     "percent_change_7d": -1.17979143,
        //                     "market_cap": 32180455.757963028,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1750,
        //             "name": "GXChain",
        //             "symbol": "GXC",
        //             "slug": "gxchain",
        //             "num_market_pairs": 24,
        //             "date_added": "2017-06-25T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": 100000000,
        //             "circulating_supply": 65000000,
        //             "total_supply": 99898145.30746,
        //             "platform": null,
        //             "cmc_rank": 96,
        //             "last_updated": "2019-10-15T18:36:03.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.4946197908756564,
        //                     "volume_24h": 19664424.512858286,
        //                     "percent_change_1h": -0.31994457,
        //                     "percent_change_24h": 18.26023072,
        //                     "percent_change_7d": 27.19805408,
        //                     "market_cap": 32150286.40691766,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 2989,
        //             "name": "STASIS EURO",
        //             "symbol": "EURS",
        //             "slug": "stasis-euro",
        //             "num_market_pairs": 30,
        //             "date_added": "2018-07-30T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 31979207,
        //             "total_supply": 31979207,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0xdb25f211ab05b1c97d595516f45794528a807ad8"
        //             },
        //             "cmc_rank": 97,
        //             "last_updated": "2019-10-15T18:36:09.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.9937017496112623,
        //                     "volume_24h": 1033623.2487330401,
        //                     "percent_change_1h": -0.17444208,
        //                     "percent_change_24h": -1.11476844,
        //                     "percent_change_7d": -0.55598733,
        //                     "market_cap": 31777793.947080728,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1087,
        //             "name": "Factom",
        //             "symbol": "FCT",
        //             "slug": "factom",
        //             "num_market_pairs": 7,
        //             "date_added": "2015-10-06T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 9825659.2,
        //             "total_supply": 9825659.2,
        //             "platform": null,
        //             "cmc_rank": 98,
        //             "last_updated": "2019-10-15T18:36:01.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 3.1402732712168357,
        //                     "volume_24h": 47995.2679651539,
        //                     "percent_change_1h": -1.21739313,
        //                     "percent_change_24h": -1.79391349,
        //                     "percent_change_7d": 4.83544816,
        //                     "market_cap": 30855254.957845796,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1966,
        //             "name": "Decentraland",
        //             "symbol": "MANA",
        //             "slug": "decentraland",
        //             "num_market_pairs": 69,
        //             "date_added": "2017-09-17T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 1050141509.426,
        //             "total_supply": 2644403343.1583,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942"
        //             },
        //             "cmc_rank": 99,
        //             "last_updated": "2019-10-15T18:36:04.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.029172886661106713,
        //                     "volume_24h": 6965646.437989829,
        //                     "percent_change_1h": 3.5181106,
        //                     "percent_change_24h": -2.82596095,
        //                     "percent_change_7d": 0.1148556,
        //                     "market_cap": 30635659.232608225,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         },
        //         {
        //             "id": 1982,
        //             "name": "Kyber Network",
        //             "symbol": "KNC",
        //             "slug": "kyber-network",
        //             "num_market_pairs": 60,
        //             "date_added": "2017-09-24T00:00:00.000Z",
        //             "tags": [],
        //             "max_supply": null,
        //             "circulating_supply": 167840652.271659,
        //             "total_supply": 213084701.090523,
        //             "platform": {
        //                 "id": 1027,
        //                 "name": "Ethereum",
        //                 "symbol": "ETH",
        //                 "slug": "ethereum",
        //                 "token_address": "0xdd974d5c2e2928dea5f71b9825b8b646686bd200"
        //             },
        //             "cmc_rank": 100,
        //             "last_updated": "2019-10-15T18:36:04.000Z",
        //             "quote": {
        //                 "EUR": {
        //                     "price": 0.17930897089143652,
        //                     "volume_24h": 2143162.2912085056,
        //                     "percent_change_1h": -0.20269856,
        //                     "percent_change_24h": -0.10109734,
        //                     "percent_change_7d": -0.96438729,
        //                     "market_cap": 30095334.632578623,
        //                     "last_updated": "2019-10-15T18:36:01.000Z"
        //                 }
        //             }
        //         }
        //     ]
        // })
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

                {/* CoinMarketCap - CORS ISSUE */}
                {/* {this.state.coins.map((coin) => (
                    <CryptoInfo
                    key={coin.id}
                    name={coin.name + ' (' + coin.symbol + ')'}
                    currency="€"
                    price={coin.quote.EUR.price.toFixed(4)}
                    volume24hr={coin.quote.EUR.volume_24h}
                    change24h={coin.quote.EUR.percent_change_24h.toFixed(2)}
                    change7day={coin.quote.EUR.percent_change_7d.toFixed(2)} />
                ))} */}

                {/* CoinGecko */}
                {this.state.coins.map((coin) => (
                    <CryptoInfo
                    key={coin.id}
                    name={coin.name + ' (' + coin.symbol + ')'}
                    currency="€"
                    price={coin.current_price.toFixed(4)}
                    volume24hr={coin.total_volume}
                    change24h={coin.price_change_percentage_24h.toFixed(2)}
                    change7day="N/A" />
                ))}
                </tbody>
            </table>
        )
    }
}

export default CryptoList