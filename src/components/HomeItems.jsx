import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagItemAction } from "./store/BagSlice";

export default function HomeItems({ item }) {
  const dispatch = useDispatch();
  const bagItem = useSelector((store) => store.bagItem);

  const elementFound = bagItem.elementId.indexOf(item.id) >=0

  function itemAddToBag() {
    dispatch(bagItemAction.addToBag(item));
    dispatch(bagItemAction.addElementId(item.id))
  }

  const handleRemove = () => {
    dispatch(bagItemAction.removeToBag(item.id))
    dispatch(bagItemAction.removeElementId(item.id))
  }

  return (
    <div className="item-container">
      <img className="item-image" src={item.images[0]} alt="item image" />
      <div className="rating">{item.rating} ⭐ | 5</div>
      <div className="company-name">{item.brand}</div>
      <div className="item-name">{item.title}</div>
      <div className="price">
        <span className="current-price">$ {item.price}</span>
        <span className="discount">({item.discountPercentage}% OFF)</span>
      </div>

      {elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleRemove}
        >
        Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={itemAddToBag}
        >
        Add to Bag
        </button>
      )}
    </div>
  );
}
