import { useState } from "react"
import ImageDetail from "./ImageDetails"

const Image = ({image}) => {

  const [hover, setHover] =  useState(false)
  
  return (
    <div>
      <article
        key={image.id}
        onMouseEnter={ () => setHover(true)}
        onMouseLeave={ () => setHover(false)}
      >
        {hover ? <ImageDetail image={image} /> : <img src={image.url} />}
        
      </article>

    </div>
)
}

export default Image