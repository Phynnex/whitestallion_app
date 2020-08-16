import React, { Component } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class ExportToExcel extends Component{

    render(){
        return(
            <div style={{marginRight: '25px'}}>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="export"
                    table="table-to-xls"
                    filename="filtredData"
                    sheet="tablexls"
                    buttonText="Export"/>
                <table hidden="true" id="table-to-xls">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>FullName</th>
                        <th>Price</th>
                        <th>Mkt Cap</th>
                        <th>Vol (24h)</th>
                        <th>Change (24h)</th>
                        <th>Circulating Supply</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.coinlist.map((crypto, i) => {
                          console.log(crypto);
                            return(
                                <tr key={i}>
                                    <td>{crypto.CoinInfo.Name}</td>
                                    <td>{crypto.CoinInfo.FullName}</td>
                                    <td>{crypto.DISPLAY.USD.PRICE}</td>
                                    <td>{crypto.DISPLAY.USD.MKTCAP}</td>
                                    <td>{crypto.DISPLAY.USD.VOLUME24HOUR}</td>
                                    <td>{crypto.DISPLAY.USD.CHANGE24HOUR}</td>
                                    <td>{crypto.DISPLAY.USD.SUPPLY}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>

            </div>
        )
    }
}
export default ExportToExcel;