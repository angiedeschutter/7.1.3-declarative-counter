import {useState, useRef} from 'react'
import './App.css';
import Gallery from './components/Gallery.jsx'
import SearchBar from './components/SearchBar'
import { DataContext } from './contexts/DataContext';
import { SearchContent } from './contexts/SearchContext';

function App() {
  let [message, setMessage] = useState('Search for Music');
  let [data, setData] = useState([]);
  let searchInput = useRef('')

const handleSearch = (e, search) => {
  e.preventDefault()
  const fetchData = async ()=>{
  document.title = `${search} Music`
  const response = await fetch(`https://itunes.apple.com/search?term=${search}`)
  const resData = await response.json()
  console.log(resData)
  if(resData.results.length){
    setData(resData.results)
  } else{
    setMessage(`We could not find anything for ${search}`)
  }
}
if(search){
  try{fetchData()}
  catch(e){}

}
}

  return (
    <div className="App">
      <SearchContent.Provider value = {
        {
          term: searchInput,
          handleSearch
        }
        }>
        <SearchBar />
      </SearchContent.Provider>
      {message}
      <DataContext.Provider value ={data}>
        <Gallery/>
      </DataContext.Provider>
    </div>
  );
}

export default App;
