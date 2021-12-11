import './App.css';
import { useEffect, useState } from 'react';
import ImageList from './components/ImagesList'
import getImagesFromAPI from './services/api'

function App() {

  const pageSize=3

  const [imagesList, setImagesList] = useState([])
  const [currentPage, setCurrentPage] =  useState(1)

  useEffect( async () => {
    const response=await getImagesFromAPI(currentPage, pageSize)
    setImagesList(response)

  }, [])

  useEffect( async () => {
    const response=await getImagesFromAPI(currentPage, pageSize)
    console.log(response)
    setImagesList([...imagesList, ...response])
    console.log(imagesList)
  }, [currentPage])


  const handleClickMorePages = () => {
    setCurrentPage(currentPage+1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{imagesList.length===0 ? 'Loading...' : <ImageList imagesList={imagesList}/>}</p>
        <button onClick={ () => handleClickMorePages()}>Otra página</button>
      </header>
    </div>
  );
}

export default App;
