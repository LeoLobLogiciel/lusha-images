import Image from "./Image"

const ImagesList = ({imagesList}) => {

  return (
    <div className="container">
      <div className="center">
          {imagesList.map ( e => (
            <Image image={e} key={e.url} />
          ))}
      </div>
    </div>
  )
}

export default ImagesList