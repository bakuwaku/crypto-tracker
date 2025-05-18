import React, { useEffect, useState } from 'react';

function Home() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/crypto/top')
      .then(res => res.json())
      .then(data => setCoins(data));
  }, []);

  return (
    <div>
      <h2>Top 10 Cryptocurrencies</h2>
      <ul>
        {coins.map(coin => (
          <li key={coin.id}>{coin.name} - ${parseFloat(coin.priceUsd).toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

import { fetchTopCoins, fetchCoinDetails } from './lib/fetchCrypto';

useEffect(() => {
  async function loadData() {
    const coins = await fetchTopCoins();
    console.log(coins);
  }
  loadData();
}, []);
