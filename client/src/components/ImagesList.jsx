import { Box, Grid, imageListClasses } from "@mui/material"
import Image from "./Image"

const ImagesList = ({imagesList}) => {

  return (
    <div className="container">
      <div className="center">
        <Grid container spacing={1}>
          {imagesList.map ( e => 
              <Grid item xs={12} sm={6} md={4} key={e.id}>
                <Image image={e} />
              </Grid>
          )}
        </Grid>
      </div>
    </div>
  )
}

export default ImagesList