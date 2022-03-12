import React, {useEffect, useState}from 'react';
import { useSearchStore } from '../context/searchContext';
function Searchbar() {

const {store,setStore,date,setDate} = useSearchStore();

   const [searchFilm, setSearchfilm] = useState('');



 useEffect(()=>{
  setStore(searchFilm.toLowerCase());
 },[searchFilm])


   function onDate (e){
     const date =  new Date(e.target.value);
     setDate(date.getFullYear())
    
   }

  return (
    <div className='searchbar'>
        <input className='searchbar__search' onChange={(e)=>setSearchfilm(e.target.value)}></input>
        <input type="date" className='searchbar__date' onChange={(e)=>onDate(e)}></input></div>
  )
}

export default Searchbar