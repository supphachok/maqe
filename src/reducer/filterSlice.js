import { createSlice } from "@reduxjs/toolkit"

export const filterSlice = createSlice({
  name: "filter",
  initialState: null,
  reducers: {
    set_filter: (state, action) => {
      return { ...state, [action.payload.slug]: action.payload.value }
    },
    clear_filter: () => {
      return null
    },
  },
})

export const { set_filter, clear_filter, set_filter_data } = filterSlice.actions

export default filterSlice.reducer
