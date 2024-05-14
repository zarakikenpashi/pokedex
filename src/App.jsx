import Header from "./components/Header"
import PokemonList from "./components/PokemonList"
import SearchBar from "./components/SearchBar"

function App() {

  return(
    <>
    <div className="relative">
      <Header />
      <SearchBar />
      <PokemonList/>
    </div>
    </>

  )
}


export default App
