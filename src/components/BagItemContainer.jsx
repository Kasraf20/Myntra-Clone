import React from "react";
import { useDispatch } from "react-redux";
import { bagItemAction } from "./store/BagSlice";

export default function BagItemContainer({ item }) {

  const dispatch = useDispatch()

  const handleRemoveItem = () => {
    dispatch(bagItemAction.removeToBag(item.id))
    dispatch(bagItemAction.removeElementId(item.id))
  }
  return (
    <div className="bag-item-container mt-5">
      <div className="item-left-part">
        <img className="bag-item-img" src={item.images[0]} />
      </div>
      <div className="item-right-part">
        <div className="company">{item.brand}</div>
        <div className="item-name">{item.title}</div>
        <div className="price-container">
          <span className="current-price">$ {item.price}</span>
          <span className="discount-percentage">
            ({item.discountPercentage}% OFF)
          </span>
        </div>   
      </div>

      <div className="remove-from-cart" onClick={handleRemoveItem}>
        X
      </div>
    </div>
  );
}
