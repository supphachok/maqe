import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Thumbnail from "./Thumbnail"
import Options from "./Options"
import { set_skus } from "../reducer/skusSlice"
import data from "../data.json"

function Post() {
  const dispatch = useDispatch()
  const skus = useSelector((state) => state.skus)

  useEffect(() => {
    // Mock function for API
    dispatch(set_skus({ data: data.skus }))
    // eslint-disable-next-line
  }, [])

  const getPrice = () => {
    const sortArray = [
      ...new Map(skus.map((item) => [item.price, item])).values(),
    ] // Unique Price

    if (sortArray.length === 1) {
      return `฿${sortArray[0]?.price}`
    } // If only one return price

    return `฿${sortArray[0]?.price} - ฿${
      sortArray[sortArray.length - 1]?.price
    }` // return minimum & maximum price
  }

  return (
    <article className="post">
      <section className="section">
        <Thumbnail
          src="https://s3-ap-southeast-1.amazonaws.com/maqe-com-4-media-uploads/content/uploads/2022/03/24074701/Optimized-Beyond_gamification.jpg"
          alt="MAQE"
        />

        {skus.length === 1 && (
          <>
            <h4>SKU Selecting</h4>
            <code>{JSON.stringify(skus[0])}</code>
          </>
        )}
      </section>
      <section className="section">
        <h1 className="title">MAQE T-Shirt</h1>
        <hr />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          dolorem deserunt iste fugit, explicabo excepturi ratione vel quis
          blanditiis sit animi. Dolores, temporibus corrupti ullam in distinctio
          omnis obcaecati laboriosam?
        </p>

        {skus && <Options />}

        <h4 className="price">{getPrice()}</h4>
        <div className="actions">
          <button className="button__primary--outline">Add to cart</button>
          <button className="button__primary">Buy now</button>
        </div>
      </section>
    </article>
  )
}

export default Post
