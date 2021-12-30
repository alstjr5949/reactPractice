import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [seed, setSeed] = useState(0);
  const onChange = (event) => {
    setSeed(event.target.value);
  };
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=krw&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div className="coinWrapper">
      <h1>The Coins! ({coins.length})</h1>
      <label htmlFor="seedMoney">Your Seed Money(Won)</label>
      <input
        onChange={onChange}
        value={seed}
        id="seedMoney"
        type="number"
        placeholder="Your seed money(원)"
      />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          {coins.map((coin) => (
            <div className="coinDiv">
              <img src={coin.image} />
              <span>
                {coin.name} ({coin.symbol}) : {coin.current_price} 원
              </span>
              <span>
                구매가능 개수 : {(seed / coin.current_price).toFixed(4)} 개
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
