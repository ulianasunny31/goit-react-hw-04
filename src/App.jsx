import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader'
import LoadMorebtn from './components/LoadMorebtn/LoadMorebtn';
import fetchPhotos from './fetchFn'


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);

useEffect(() => {
  if (searchQuery.trim() === '') {
    return;
  }

async function handleSearch() {
  try {
    setIsError(false);  
    setIsLoading(true);
    
    const res = await fetchPhotos(searchQuery, page);
    setGallery((prev)=>[...prev, ...res]) 
    
  } catch {
      setIsError(true);
  } finally {
      setIsLoading(false)
    }
}
  
  handleSearch() 
}, [searchQuery, page]) 


  
  function changePage() {
    setPage(prev => prev + 1)
  }

  function handleChangeQuery(newQuery) {
    if (newQuery === searchQuery) return;
    setSearchQuery(newQuery);
    setPage(0);
    setGallery([])
  }
 
  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery}/>
      {isLoading && <Loader/>}
      {isError && <ErrorMessage/>}
      {gallery && gallery.length > 0 && <ImageGallery pics={gallery}/>  }
      {gallery && gallery.length > 0 && <LoadMorebtn changePage={changePage}/>}
    </>
  )
}
  export default App;
