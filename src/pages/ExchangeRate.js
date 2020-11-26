import React, {Component} from 'react';
//import ReactTable from "react-table";
//import 'react-table/react-table.css'
//import ExportToExcel from "./ExportToExcel"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class ExchangeRate extends Component {
  state = {
    loading:true,
    coinlist: []
  };
 

  async componentDidMount() {
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD";
    const response = await fetch (url);
    const data = await response.json();
    this.setState({ coinlist: data.Data, loading: false});

  }

    

  render() {
    console.log(this.state.coinlist)
    if (this.state.loading) {
      return <div>loading...</div>;
    }


    return (
      <>
        <section>
          <section className="exchangerate-container">
            <section className="exchangerate-header">
              <Navbar />
              <section>
                <h1>Digital Currency Value</h1>
                <p>
                  Live Market trades showing the price and value of 100
                  cryptocurrencies
                </p>
              </section>
            </section>
          </section>
          <table>
            <tr>
              <th>symbol</th>
              <th>Coin Name</th>
              <th>Price</th>
              <th>Mkt Cap</th>
              <th>Vol (24h)</th>
              <th>Change (24h)</th>
              <th>Supply Chain</th>
            </tr>

            {this.state.coinlist.map((crypto, i) => (
              <tr key={i}>
                <td>{crypto.CoinInfo.Name}</td>
                <td>{crypto.CoinInfo.FullName}</td>
                <td>{crypto.DISPLAY.USD.PRICE}</td>
                <td>{crypto.DISPLAY.USD.MKTCAP}</td>
                <td>{crypto.DISPLAY.USD.VOLUME24HOUR}</td>
                <td>{crypto.DISPLAY.USD.CHANGE24HOUR}</td>
                <td>{crypto.DISPLAY.USD.SUPPLY}</td>
              </tr>
            ))}
          </table>
          <Footer />
        </section>
      </>
    );
  }
}

export default ExchangeRate;