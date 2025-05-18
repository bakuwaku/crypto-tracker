
export async function fetchTopCoins(limit = 10) {
  const res = await fetch(`https://api.coincap.io/v2/assets?limit=${limit}`);
  const data = await res.json();
  return data.data;
}

export async function fetchCoinDetails(coinId) {
  const res = await fetch(`https://api.coincap.io/v2/assets/${coinId}`);
  const data = await res.json();
  return data.data;
}

export async function fetchCoinHistory(coinId, interval = 'd1') {
  const res = await fetch(`https://api.coincap.io/v2/assets/${coinId}/history?interval=${interval}`);
  const data = await res.json();
  return data.data;
}

export async function fetchRates() {
  const res = await fetch('https://api.coincap.io/v2/rates');
  const data = await res.json();
  return data.data;
}

export async function fetchMarkets() {
  const res = await fetch('https://api.coincap.io/v2/markets');
  const data = await res.json();
  return data.data;
}
