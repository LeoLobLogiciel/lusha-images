import { useState } from 'react'
import {GrLike, GrDislike} from 'react-icons/gr'

const styles={
  like:{
    cursor: 'pointer'
  }
}
const Like = ({likesCount}) => {

  const [like, setLike] = useState(true)
  const [likes, setLikes] = useState(likesCount)

  const handleClick = () => {
    if (like) {
      setLikes(likes-1)
    } else {
      setLikes(likes+1)
    }
    setLike(!like)
  }

  return (
    <span>
      {like ? <GrLike style={styles.like} onClick={handleClick}/> : <GrDislike style={styles.like} onClick={handleClick}/>}
      {likes}
    </span>
  )
}

export default Like