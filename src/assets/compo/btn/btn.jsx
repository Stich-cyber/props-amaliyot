import React from "react";
import "./btn.css";
function Btn({ bg }) {
  let btnStyle = {
    backgroundColor: bg,
  };
  return (
    <button id="btn" style={btnStyle}>
      <i id="ii" className="fa fa-shopping-cart"></i>
      Add to cart
    </button>
  );
}
export default Btn;
