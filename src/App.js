import React, {useState,useEffect} from 'react';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import axios from 'axios';
import './App.css';

const App=() => {
const [items,setItems]=useState([])
const [isLoading,setIsLoading]=useState(true)


useEffect(()=>{
const fetchItem= async()=> {
  const result =await axios(`https://www.breakingbadapi.com/api/characters`)
  setItems(result.data)
  setIsLoading(false)
}
fetchItem()
},[])

  return (
    <div className="container">
    <Header/>
    <CharacterGrid   isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
