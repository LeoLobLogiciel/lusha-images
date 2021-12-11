import './App.css';
import { useEffect, useRef, useState } from 'react';
import ImageList from './components/ImagesList'
import getImagesFromAPI from './services/api'
import Loading from './components/Loading'
import ErrorMessage from './components/ErrorMessage'
import { Box, Grid } from '@mui/material';

const styles={
  imagesList: {
    height: '700px',
    overflowY: "scroll"
  }
}

function App() {

  const pageSize=15
  const listImagesRef=useRef()

  const [imagesList, setImagesList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [showLoading, setShowLoading] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const loadMoreImages = async () => {
    // console.log("Current Page", currentPage)
    setShowLoading(true)
    const response=await getImagesFromAPI(currentPage, pageSize)
    setShowLoading(false)
    if (response.status==="OK") {
      setImagesList([...imagesList, ...response.data])
      setShowErrorMessage(false)
      setCurrentPage(currentPage+1)
    } else {
      setErrorMessage("API error on loading images...")
      setShowErrorMessage(true)
    }
  }
 
  useEffect( () => {
    loadMoreImages()
  }, [])


  const onScroll = async () => {
    if (listImagesRef.current) {
      const {scrollTop, scrollHeight, clientHeight} = listImagesRef.current
      if (scrollTop + clientHeight === scrollHeight) {
        if (!showLoading) {
          await loadMoreImages()
        }
      }
    }
  }

  return (
    <div 
      style={styles.imagesList} 
      onScroll={onScroll}
      ref={listImagesRef}
    >
      <Grid container justifyContent={"center"} >
        <Grid container xs={6}>
          <Grid item>
            <ImageList imagesList={imagesList} />
          </Grid>
          <Grid item>
            { showErrorMessage ? <ErrorMessage textError={errorMessage} /> :  null}
          </Grid>
          <Grid item xs={12}>
            { showLoading ? <Loading /> :  null}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
