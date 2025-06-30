import i1 from "../../img/i1.png";
import "./card.css";
function Card({ children, color }) {
  let bgCard = {
    backgroundColor: color,
  };
  return (
    <div className="div" style={bgCard}>
      <img src={i1} alt="" />
      <i id="i" className="fa fa-heart"></i>
      <p>NIKE AIR FORCE 1 ‘07 white/black</p>
      <p>$89.99</p>
      <h6>I lost left shoe, don’t need this one anymore. Please buy it.</h6>
      {children}
    </div>
  );
}
export default Card;
