import React, { useEffect, useState } from "react";
import axios from "axios";
import { ApexChartComponent } from "../../components";

const CoinGeckoDataFetcher = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",
          {
            params: {
              vs_currency: "usd",
              days: "30",
              interval: "daily",
            },
          }
        );
        const prices = response.data.prices.map(([timestamp, price]) => ({
          timestamp,
          price,
        }));
        setChartData(prices);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ApexChartComponent chartData={chartData} />
    </div>
  );
};

export default CoinGeckoDataFetcher;
