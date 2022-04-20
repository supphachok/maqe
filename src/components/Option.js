import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { set_filter } from "../reducer/filterSlice"
import Button from "./Button"
import { set_skus } from "../reducer/skusSlice"

const Option = ({ data }) => {
  const skus = useSelector((state) => state.skus)
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  const { slug, title, values } = data

  const filterData = (option) => {
    return skus.filter((item) => {
      return item.variants[slug] === option.id
    })
  }

  const handleFilter = (option) => {
    dispatch(
      set_filter({
        slug,
        value: option.id,
      })
    )

    dispatch(
      set_skus({
        data: filterData(option),
      })
    )
  }

  const hasData = (option) => {
    return skus.find((item) => item?.variants?.[slug] === option?.id)
  }

  return (
    <section className="option">
      <h5>{title}</h5>
      {values.map((option) => (
        <Button
          className={`button ${
            filter?.[slug] === option.id && "buttonFocusing"
          }`}
          onClick={() => handleFilter(option)}
          key={`${slug}-${option.value}`}
          disabled={
            (filter && filter?.[slug] && filter?.[slug] !== option.id) ||
            (filter && !hasData(option))
          }
        >
          {option.value}
        </Button>
      ))}
    </section>
  )
}

export default Option
