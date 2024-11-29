import React from 'react'
import {useState,useEffect} from 'react'  
import SearchBox from './Component/SearchBox';
import CardList from './Component/CardList';


const selectNo={

}

const App = () => {
  const[data,setData]=useState([]);
  const[searchField,setSearchField]=useState("");
  const [filteredData,setFilteredData]=useState(data);
  const[select,setSelect]=useState("1");


  useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users").then((respose)=>respose.json())
.then((users)=>setData(users));

  },[])
  const handleSelect=(e)=>{
    const newSelect=e.target.value;
    setSelect(newSelect);
  }
const onSearchChange=(event)=>{
const searchFieldString=event.target.value.toLocaleLowerCase( );
setSearchField(searchFieldString);
}
useEffect(()=>{
  const newFilteredData=data.filter((result)=>{
    return result.name.toLocaleLowerCase().includes(searchField);
  });
  setFilteredData(newFilteredData)
},[data,searchField])
  
  return (
   <div>
    <SearchBox searchFunction={onSearchChange} classname="SearchBox"  placeHolder="search"/>
   
    <CardList filter={filteredData} />
    
</div>
   
  )
}

export default App