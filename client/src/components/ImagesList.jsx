import Image from "./Image"

const ImagesList = ({imagesList}) => {
  return (
    <div className="container">
      <div className="center">
          {imagesList.map ( e => (
            <Image image={e} key={e.imdbID} />
          ))}
      </div>
    </div>
  )
}

export default ImagesList