import { useState,useRef,useCallback } from "react";
import useBookSearch from "./useBookSearch";
import './App.css'
export default function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [value,setValue]= useState("")
  const { loading, error, books, hasMore } = useBookSearch(query, pageNumber);
  const handleSearch = () => {
    const cleanedValue = value.trim();
    if (cleanedValue.length <= 2) {
      alert("Please enter at least 3 characters to search!");
      return; 
    }
    setQuery(value);
    setPageNumber(1);
  };
  const observer = useRef();
  const lastBookElementref = useCallback(node=>{
    if(loading)return
    if(observer.current) observer.current.disconnect()
      observer.current= new IntersectionObserver(entries=>{
        if(entries[0].isIntersecting && hasMore){
          setPageNumber(prevPageNumber=>prevPageNumber+1)
        }
    
      })
    if(node)observer.current.observe(node)
  },[loading,hasMore])
  return (
    <div>
      <input
        type="text"
        // value={query}
        onChange={(event)=>setValue(event.target.value)}
        placeholder="Type book name ...."
      />
      <button onClick={handleSearch}>Search</button>
      {books.map((book,index) =>{
        if(books.length==index+1){
          return <div ref={lastBookElementref} key={book}>book</div>
        }
        return<div key={book}>{book}</div>
      })}
      <div>{loading&&"Loading..."}</div>
      <div>{error &&"Error has Occured"}</div>
    </div>
  );
}
