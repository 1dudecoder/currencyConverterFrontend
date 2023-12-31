import React, { useState } from "react";
import { Navbar } from "../../components";
import "./Home.css";
import Dropdown from "../../components/commons/dropdown/Dropdown";
import MyInput from "../../components/commons/input/MyInput";
import ApexChartComponent from "./ApexChartComponent";
import CoinGeckoDataFetcher from "./CoinGeckoDataFetcher";

function Home() {
  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
  ];

  const [showsearchbar1, setshowSearchbar1] = useState(false);
  const [showsearchbar2, setshowSearchbar2] = useState(false);

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
              options={options}
              heading={"From"}
              showsearchbar={showsearchbar1}
              setshowSearchbar={setshowSearchbar1}
            />
            <div className="input-data">
              <MyInput data={"100"} />
            </div>
          </div>
        </div>

        <div className="my-inputs">
          <div className="drop-downs">
            <Dropdown
              options={options}
              heading={"To"}
              showsearchbar={showsearchbar2}
              setshowSearchbar={setshowSearchbar2}
            />
            <div className="input-data">
              <MyInput data={"100"} />
            </div>
          </div>
        </div>
      </div>

      <div className="my-chart">
        <CoinGeckoDataFetcher />
      </div>
    </div>
  );
}

export default Home;
