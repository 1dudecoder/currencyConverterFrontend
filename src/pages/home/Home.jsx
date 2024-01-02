import React, { useEffect, useState } from "react";
import { Navbar } from "../../components";
import { CoinGeckoDataFetcher } from "../../services";
import { Dropdown, MyInput } from "../../components/commons";
import "./Home.css";
import { mydata } from "../../constants/mydata";
import { useFetch } from "../../hooks/index";

function Home() {
  const [showSource, setshowSource] = useState(false);
  const [targetCurrency, setTargetCurrency] = useState({
    symbol: "BTC",
  });
  const [sourcecurrency, setSourcecurrency] = useState({
    symbol: "BTC",
  });
  const [showTarget, setshowTarget] = useState(false);
  const [dropdata, setDropdown] = useState([]);
  const [selectamount, setSelectamount] = useState("1");
  const [convertedamount, setConvertedamount] = useState("1");
  const [sourcetargetcurrentPrice, setsourcetargetcurrentPrice] = useState({
    source: 0,
    target: 0,
  });

  const { loading, error, data } = useFetch(
    "http://localhost:3000/api/v1/top/100"
  );

  const convertFun = async (myamount, mysource, mytarget) => {
    try {
      const apiUrl = "http://localhost:3000/api/v1/convert";
      const sourceCrypto = mysource;
      const amount = myamount;
      const targetCurrency = mytarget;

      const response = await fetch(
        `${apiUrl}?sourceCrypto=${sourceCrypto}&amount=${amount}&targetCurrency=${targetCurrency}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response?.json();
      setConvertedamount(data.data.convertedAmount);
      setsourcetargetcurrentPrice({
        source: data.data.sourceCryptoPriceUSD,
        target: data.data.targetCurrencyRateUSD,
      });
      console.log(data.data, "----->");
    } catch (error) {
      console.error("Error in convertFun:", error.message);
    }
  };

  const throttle = (func, delay) => {
    let lastCall = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastCall >= delay) {
        func(...args);
        lastCall = now;
      }
    };
  };

  const throttledConvertFun = throttle(convertFun, 300);

  const handlAmountchange = (e) => {
    let amount = e.target.value;
    let mysource = sourcecurrency.symbol + "";
    let mytarget = targetCurrency.symbol + "";
    setSelectamount(e.target.value);
    throttledConvertFun(amount, mysource.toUpperCase(), mytarget.toUpperCase());
  };

  const handleitemclicked = () => {
    let amount = selectamount;
    let mysource = sourcecurrency.symbol + "";
    let mytarget = targetCurrency.symbol + "";
    throttledConvertFun(amount, mysource.toUpperCase(), mytarget.toUpperCase());
  };

  useEffect(() => {
    const fetchData = async () => {
      if (data) {
        console.log(data, "----data");
        setDropdown(data);
      } else {
        setDropdown(mydata);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="header-text">
        <p>Always get the real exchange rate</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          consectetur!
        </p>
      </div>

      <div className="calculator">
        <div className="my-inputs">
          <div className="drop-downs">
            <Dropdown
              options={dropdata}
              heading={"From"}
              showsearchbar={showSource}
              setshowSearchbar={setshowSource}
              sourcecurrency={sourcecurrency}
              setSourcecurrency={setSourcecurrency}
              handleitemclicked={handleitemclicked}
              setTargetCurrency={setTargetCurrency}
              id={1}
            />
            <div className="input-data">
              <MyInput
                setSelectamount={setSelectamount}
                selectamount={selectamount}
                handleChange={handlAmountchange}
              />
            </div>
          </div>
        </div>

        <div className="my-inputs">
          <div className="drop-downs">
            <Dropdown
              options={dropdata}
              heading={"To"}
              showsearchbar={showTarget}
              setshowSearchbar={setshowTarget}
              sourcecurrency={targetCurrency}
              setSourcecurrency={setTargetCurrency}
              handleitemclicked={handleitemclicked}
              setTargetCurrency={setTargetCurrency}
              id={2}
            />
            <div className="input-data">
              <MyInput
                selectamount={convertedamount}
                handleChange={handlAmountchange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-chart">
        <div className="my-status">
          <div className="totalcal">
            <div>
              <p>Source Price</p>
              <h1>{sourcetargetcurrentPrice.source.toFixed(1)}</h1>
            </div>
            <div>
              <p>Target Price</p>
              <h1>{sourcetargetcurrentPrice.target.toFixed(1)}</h1>
            </div>
          </div>
          <div></div>
        </div>
        <CoinGeckoDataFetcher />
      </div>
    </div>
  );
}

export default React.memo(Home);
