import React from "react";
import BagItemContainer from "../BagItemContainer";
import { useSelector } from "react-redux";
import BagSummary from "../BagSummary";

export default function Bag() {
  const bagItem = useSelector((store) => store.bagItem);
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {bagItem.initalVal.map((item) => (
            <BagItemContainer key={item.id} item={item} />
          ))}
        </div>
        <div className="bag-summary">
          <BagSummary />
        </div>
      </div>
    </main>
  );
}
