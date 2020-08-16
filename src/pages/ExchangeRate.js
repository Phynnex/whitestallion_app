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
              <h1>Digitital Currency Value</h1>
              <p>Live Market trades showing the price and value of 100 cryptocurrencies</p>
            </section>
            </section>
            </section>
            <div>
            {this.state.coinlist.map((crypto, i) => ( 
              <div key={i}>
                
                <div>{crypto.CoinInfo.Name}</div>
                <div>{crypto.CoinInfo.FullName}</div>
                <div>{crypto.DISPLAY.USD.PRICE}</div>
                <div>{crypto.DISPLAY.USD.MKTCAP}</div>
                <div>{crypto.DISPLAY.USD.VOLUME24HOUR}</div>
                <div>{crypto.DISPLAY.USD.CHANGE24HOUR}</div>
                <div>{crypto.DISPLAY.USD.SUPPLY}</div>
              </div>
            ))}
            </div>
          <Footer/>
        </section>
      </>
    );
  }
}

export default ExchangeRate;