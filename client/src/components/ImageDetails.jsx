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
        <Grid container xs={12}>
          <Grid item>
            <span style={styles.text}><Like likesCount={image.likes} /></span>
          </Grid>
          <Grid item>
            <span style={styles.text}>{image.description}</span>              
          </Grid>
        </Grid>
      </div>
  )
}

export default ImageDetail