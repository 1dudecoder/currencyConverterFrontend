import React from "react";
import sym from "../../../assets/Flag.png";
import downarrow from "../../../assets/down-arrow.png";
import searchicon from "../../../assets/searchimg.png";
import "./Dropdown.css";

function Dropdown({ heading, options, showsearchbar, setshowSearchbar }) {
  const handleShowdrop = () => {
    if (showsearchbar == true) {
      setshowSearchbar(false);
    } else {
      setshowSearchbar(true);
    }
  };
  return (
    <>
      <p>{heading}</p>
      <div className="main-container">
        <div className="drop-container" onClick={handleShowdrop}>
          <div className="currency">
            <p>GBP - BRITESTH POUND </p>
          </div>
          <div className="sym-avatar">
            <img src={sym} alt="usd-flag" height={30} width={30} />
          </div>
          <div className="arrow-image">
            <img src={downarrow} alt="downarrow" height={15} width={15} />
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
            {options &&
              options.map((item) => {
                return (
                  <>
                    <hr />
                    <p className="options">{item}</p>
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
