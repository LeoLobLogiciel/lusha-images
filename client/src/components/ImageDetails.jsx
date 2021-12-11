// import * as React from 'react'
import Box from '@mui/material/Box';

const styles={
  text: {
    color: 'white'
  }
}

const ImageDetail = ({image}) => {
  return (
    <Box 
      sx={{
        width: 200,
        height: 200,      
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <span style={styles.text}>{image.description}</span>  
      <br />
      <span style={styles.text}>{image.likes}</span>  
      
    </Box>  
  )
}

export default ImageDetail