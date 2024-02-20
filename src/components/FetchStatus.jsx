import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusAction } from "./store/fetchStatusSlice";
import { itemsActions } from "./store/itemsSlice";

export default function FetchStatus() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

    async function getData(){
        dispatch(fetchStatusAction.markFetchingStarted());
        let res = await fetch('https://dummyjson.com/products/category/mens-shirts')
        let data = await res.json()
        dispatch(itemsActions.addInitialItems(data.products))
        dispatch(fetchStatusAction.markFetchingDone());
    }

    useEffect(() => {
        getData()
    },[])

  return <></>;
}
