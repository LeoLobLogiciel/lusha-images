
const Image = ({image}) => {

  return (
    <div>
      <article
        key={image.url}
      >
        <img src={image.url} />
      </article>

    </div>
)
}

export default Image