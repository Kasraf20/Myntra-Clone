import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagItemSlice from "./BagSlice";
import searchItemSlice from "./SearchSlice";
const myntraStore = configureStore({
    reducer: {
      items : itemsSlice.reducer,
      fetchStatus : fetchStatusSlice.reducer,
      bagItem : bagItemSlice.reducer,
      searchItem : searchItemSlice.reducer,
    }
  });
  
  export default myntraStore;