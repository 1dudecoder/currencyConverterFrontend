import React, { useState } from "react";
import downarrow from "../../../assets/down-arrow.png";
import searchicon from "../../../assets/searchimg.png";
import "./Dropdown.css";

function Dropdown({
  heading,
  options,
  showsearchbar,
  setshowSearchbar,
  setSourcecurrency,
  handleitemclicked,
  setTargetCurrency,
  id,
}) {
  const handleShowdrop = () => {
    if (showsearchbar == true) {
      setshowSearchbar(false);
    } else {
      setshowSearchbar(true);
    }
  };

  const handleclickitem = (item) => {
    setCurrencyName(item.name);
    console.log(id, item.symbol);
    if (id == 1) {
      setSourcecurrency((data) => {
        return item;
      });
    }

    if (id == 2) {
      setTargetCurrency((data) => {
        return item;
      });
    }

    setshowSearchbar(false);
    handleitemclicked();
  };

  const [currencyname, setCurrencyName] = useState();
  return (
    <>
      <div className="main-container">
        <p>{heading}</p>
        <div className="drop-container" onClick={handleShowdrop}>
          <div className="currency">
            {<p>{!currencyname ? options[0]?.id : currencyname}</p>}
          </div>
          <div className="my-icons">
            <div className="sym-avatar">
              <img
                src={options[0]?.image}
                alt="usd-flag"
                height={30}
                width={30}
              />
            </div>
            <div className="arrow-image">
              <img src={downarrow} alt="downarrow" height={15} width={15} />
            </div>
          </div>
        </div>
        <div
          className="drop-search"
          style={{ display: showsearchbar == true ? "flex" : "none" }}
        >
          <div className="search-func">
            <div className="search-icon">
              <img src={searchicon} alt="searchicon" width={15} height={15} />
            </div>
            <div className="drop-input">
              <input type="text" placeholder="search currency" />
            </div>
          </div>

          <div className="options-height">
            {options.map((item) => {
              return (
                <>
                  <div
                    className="item-row"
                    onClick={() => {
                      handleclickitem(item);
                    }}
                  >
                    <div className="items">{item.name}</div>
                    <div className="search-icon">
                      <img
                        src={item.image}
                        alt="searchicon"
                        width={15}
                        height={15}
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
