import { Grid, Stack } from "@mui/material"
import Like from "./Like"

const styles={
  text: {
    color: 'white',
    fontSize: 'small',
    paddingLeft: '10px',
    paddingBottom: '10px',
  },
}

const ImageDetail = ({image}) => {
  return (
      <div className="imageDetail">
          <Stack
          >
            <span style={styles.text}><Like likesCount={image.likes} /></span>
            <span style={styles.text}>{image.description}</span>              
          </Stack>

      </div>
  )
}

export default ImageDetail