import NavBar from "./NavBar";
import "./Mainpage.css";
import Summary from "./Summary";
import Income from "./Income";
import Strategy from "./Strategy";

function Mainpage() {
  return (
    <div className="mainDiv">
      <NavBar />
      <Summary />
      <Income />
      <Strategy />
    </div>
  );
}

export default Mainpage;
