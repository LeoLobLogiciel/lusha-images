import Like from "./Like"

const styles={
  text: {
    color: 'white',
    fontSize: 'small',
    paddingLeft: '10px',
    paddingBottom: '10px'
  },
  container: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignContent: 'space-around',
    alignItems: 'flex-start',
    height: '150px',
    width: '150px',
    backgroundColor: 'primary.dark'
  }
}

const ImageDetail = ({image}) => {
  return (
      <div style={styles.container}>
        <span style={styles.text}><Like likesCount={image.likes} /></span>  
        <br />
        <span style={styles.text}>{image.description}</span>  

      </div>
  )
}

export default ImageDetail