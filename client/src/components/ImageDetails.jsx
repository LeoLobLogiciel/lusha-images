import { Grid } from "@mui/material"
import Like from "./Like"

const styles={
  text: {
    color: 'white',
    fontSize: 'small',
    paddingLeft: '10px',
    paddingBottom: '10px'
  },
}

const ImageDetail = ({image}) => {
  return (
      <div className="imageDetail">
        <Grid container direction={"column"} alignItems={"flex-start"}>
          {/* <Grid item xs={12}>
            <span style={styles.text}>{image.description}</span>  
          </Grid> */}
          <Grid item xs={12}>
            <span style={styles.text}><Like likesCount={image.likes} /></span>  
          </Grid>
        </Grid>
      </div>
  )
}

export default ImageDetail