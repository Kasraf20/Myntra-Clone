import React from "react";
import { useSelector } from "react-redux";

export default function BagSummary() {
  const bagItem = useSelector((store) => store.bagItem);
  let amount = 0;
  let deliveryCharge = 5;
  bagItem.initalVal.map((item) => {
    amount += Number(item.price);
  });
  const finalPayment = amount + deliveryCharge;

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagItem.initalVal.length} Items){" "}
        </div>
        <hr />
        <div className="price-header">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">${amount}</span>
        </div>
        <hr />
        <div className="price-header">
          <span className="price-item-tag">Delivery Fee</span>
          <span className="price-item-value">${deliveryCharge}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Final Amount</span>
          <span className="price-item-value">${finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
}
