import './App.css';
import { useEffect, useState } from 'react';
import ImageList from './components/ImagesList'
function App() {

  const [imagesList, setImagesList] = useState([])

  useEffect( () => {
    fetch("/api/images")
      .then( res => res.json())
      .then( data => {
        if (data.status==="OK") {
          setImagesList(data.data)
        } else {
          setImagesList([])
        }
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <ImageList imagesList={imagesList}/>
        <p>{imagesList.length===0 ? 'Loading...' : imagesList.length}</p>
        {imagesList.map( e => (
          e.url
        ))}
      </header>
    </div>
  );
}

export default App;
