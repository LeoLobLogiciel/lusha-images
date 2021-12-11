import { Box, Grid, imageListClasses } from "@mui/material"
import Image from "./Image"

const ImagesList = ({imagesList}) => {

  return (
    <div className="container">
      <div className="center">
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={1}>
          {imagesList.map ( e => 
              <Grid item xs={12} sm={6} md={4} ><Image image={e} key={e.id} /></Grid>
          )}
        </Grid>
      </Box>

      </div>
    </div>
  )
}

export default ImagesList