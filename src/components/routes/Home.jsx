import React, { useState } from "react";
import HomeItems from "../HomeItems";
import { useSelector } from "react-redux";

export default function Home() {
  const items = useSelector((store) => store.items);
  const searchItem = useSelector((store) => store.searchItem);
  
  return (
    <main>
      <div className="items-container">
        {items
          .filter((item) => item.brand.toLowerCase().includes(searchItem))
          .map((item) => (
            <HomeItems key={item.id} item={item} />
          ))}
      </div>
    </main>
  );
}
