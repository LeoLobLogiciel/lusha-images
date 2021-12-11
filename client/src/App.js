import './App.css';
import { useEffect, useRef, useState } from 'react';
import ImageList from './components/ImagesList'
import getImagesFromAPI from './services/api'
import Loading from './components/Loading'

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

  useEffect( async () => {    
    setShowLoading(true)
    const response=await getImagesFromAPI(currentPage, pageSize)
    setImagesList(response)
    setShowLoading(false)
  }, [])
  
  useEffect( async () => {
    setShowLoading(true)
    const response=await getImagesFromAPI(currentPage, pageSize)
    setImagesList([...imagesList, ...response])
    setShowLoading(false)
  }, [currentPage])


  const onScroll = () => {
    if (listImagesRef.current) {
      const {scrollTop, scrollHeight, clientHeight} = listImagesRef.current
      if (scrollTop + clientHeight == scrollHeight) {
        setCurrentPage(currentPage+1)
      }
    }

  }

  return (
    <div 
      className="App" 
      style={styles.imagesList} 
      onScroll={onScroll}
      ref={listImagesRef}
    >
      <header className="App-header">
        <ImageList 
          imagesList={imagesList}           
        />
        { showLoading ? <Loading /> :  null}
      </header>
    </div>
  );
}

export default App;
