import { useState, useEffect } from "react";
import PokemonList from "./pokemonList";
import Pagination from "./pagination";
import axios from "axios";
import './App.css'
function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageURL, setCurrentPageURL] = useState(
    "https://pokeapi.co/api/v2/pokemon",
  );
  const [nextPageURL, setNextPageURL] = useState();
  const [prevPageURL, setPrevPageURL] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let cancel;
    setLoading(true);
    axios
      .get(currentPageURL, {
        cancelToken: new axios.CancelToken(c => (cancel = c)),
      })
      .then((rep) => {
        setLoading(false);
        setPokemon(rep.data.results.map(p => p.name));
        setNextPageURL(rep.data.next);
        setPrevPageURL(rep.data.previous);
      });
    return () => {
      if(cancel) return cancel;
    };
  }, [currentPageURL]); // everytime current page url changes rerun that axios statement

  const GoToNextPage=()=> {
    setCurrentPageURL(nextPageURL);
  }
  const GoToPrevPage=()=> {
    setCurrentPageURL(prevPageURL);
  }

  if (loading) {
    return "Loading...";
  }

  return (
    <div>
      <PokemonList pokemon={pokemon} />
      <Pagination 
  Next={nextPageURL ? GoToNextPage : null} 
  Prev={prevPageURL ? GoToPrevPage : null} 
/>
    </div>
  );
}
export default App;
