import { configureStore } from "@reduxjs/toolkit"
import filterReducer from "./reducer/filterSlice"
import skusReducer from "./reducer/skusSlice"

const store = configureStore({
  reducer: {
    filter: filterReducer,
    skus: skusReducer,
  },
})

export default store
