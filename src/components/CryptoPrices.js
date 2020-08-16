import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import {
  Card,
  Dimmer,
  Loader,
  Select
} from 'semantic-ui-react';

function CryptoPrice() {
  const [loading, setLoading] = useState(true);
  const [priceData, setPriceData] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [series, setSeries] = useState(null);

  const options = [
    { value: 'USD', text: 'USD' },
    { value: 'EUR', text: 'EUR' },
    { value: 'GBP', text: 'GPB' }
  ];

  useEffect(() => {
    async function fetchPrices() {
      const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      const data = await res.json();
      setCurrency(data.bpi.USD.code);
      setPriceData(data.bpi);
      getChartData();
    }
    fetchPrices();
  }, []);

  const getChartData = async () => {
    const res = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?`)
    const data = await res.json();
    const categories = Object.keys(data.bpi);
    const series = Object.values(data.bpi);
    setChartData({
      xaxis: {
        categories: categories
      }
    })
    setSeries([
      {
        name: "Bitcoin Price",
        data: series
      }
    ])
    setLoading(false);
  }

  const handleSelect = (e, data) => {
    setCurrency(data.value);
  };

  return (
    <div className='cryptoprice-container'>
      <div className="cryptoprice-header">
        <h1>Cryptocurrency Prices (BTC)</h1>
        <p><i>showing live market price for BTC</i></p>
      </div>
      {loading ? (
        <div>
          <Dimmer active inverted>
            <Loader>Loading</Loader>
          </Dimmer>
        </div>
      ) : (
          <>
            <div className="cryptoprice-card-container">
              <div className='form'>
                <Select placeholder='Select your currency' onChange={handleSelect} options={options}/>
              </div>
              <div className='price-card'>
                <Card>
                  <Card.Content>
                    <Card.Header>{currency} Price</Card.Header>
                    <Card.Description>{priceData[currency].rate}</Card.Description>
                  </Card.Content>
                </Card>
              </div>
            </div>
            <div className="chart-img">
              <Chart
                options={chartData}
                series={series}
                type="line"
                width="1200"
                height="300"
              />
            </div>
          </>
        )}
    </div>
  );
}

export default CryptoPrice;
