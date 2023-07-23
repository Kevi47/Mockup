import cr from "../Logo/cr.jpeg";
import "./Summary.css";
function Summary() {
  return (
    <div className="summary">
      <div className="headerpro">
        <img className="propic" src={cr} alt="Loading" />
        <div className="head2">
          <p className="name">Hi Kevin,</p>
          <p className="greet">welcome back</p>
        </div>
      </div>
      <div className="balance">
        <p className="b1">Today</p>
        <p className="b2">$20,180</p>
        <p className="greet">Account Balance</p>
        <p className="b3">$5000</p>
        <p className="greet">Year to-Date Contribution</p>
        <p className="b3">$2210</p>
        <p className="greet">Total Interest</p>
      </div>
    </div>
  );
}

export default Summary;
