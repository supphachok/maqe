import React from "react"
import { useDispatch } from "react-redux"
import Option from "./Option"
import { clear_filter } from "../reducer/filterSlice"
import { set_skus } from "../reducer/skusSlice"
import data from "../data.json"

const Options = () => {
  const dispatch = useDispatch()

  return (
    <section>
      <label>
        Choose your option{" "}
        <button
          type="button"
          onClick={() => {
            dispatch(clear_filter())
            dispatch(set_skus({ data: data.skus }))
          }}
          className="buttonReset"
        >
          reset
        </button>
      </label>

      {data?.options?.map((option) => (
        <Option key={option.slug} data={option} />
      ))}
    </section>
  )
}

export default Options
