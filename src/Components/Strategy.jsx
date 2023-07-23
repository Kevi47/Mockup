import { useState } from "react";
import endlogo from "../Logo/endLogo.png";
import "./Strategy.css";
function Strategy() {
  const [sval1, setsval1] = useState(0);
  const [sval2, setsval2] = useState(0);
  return (
    <div className="strategy">
      <div className="rstrategy">
        <div className="editcont">
          <p className="mainp">Retirement Strategy</p>
          <p className="subp">Employee Contribution</p>
          <div className="sin">
            <div>
              <input
                className="i1"
                type="range"
                value={sval1} min={1} max={24}
                onChange={(e) => setsval1(e.target.value)}
              ></input>
            </div>
            <p className="dval">{sval1}%</p>
          </div>
          <p className="subp">Retirement Age</p>
          <div className="sin">
            <div>
              <input
                className="i1"
                type="range"
                value={sval2} min={45} max={100}
                onChange={(e) => setsval2(e.target.value)}
              ></input>
            </div>
            <p className="dval">{sval2}</p>
          </div>
          <p className="subp">Employer Contribution 8.4%</p>
          <p className="subp">Interest Rate 5%</p>
        </div>
        <button className="updateb">Update</button>
      </div>
      <div className="endLogo">
        <img id="endImg" src={endlogo} alt="Loading" />
      </div>
    </div>
  );
}

export default Strategy;
