import { createSlice } from "@reduxjs/toolkit"

export const skusSlice = createSlice({
  name: "skus",
  initialState: [],
  reducers: {
    set_skus: (state, actions) => {
      return actions.payload.data
    },
  },
})

export const { set_skus } = skusSlice.actions

export default skusSlice.reducer
