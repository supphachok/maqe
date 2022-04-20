import React from "react"

const Thumbnail = ({ src, title }) => {
  return <img src={src} alt={title} className="thumbnail" />
}

export default Thumbnail
