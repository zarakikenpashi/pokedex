import { useState } from "react"
import POKEMONS from "../POKEMONS"
import PokemonList from "../components/PokemonList"
import SearchBar from "../components/SearchBar"

function Home() {
  const [pokemons, setPokemons] = useState(POKEMONS)


  const handlePokeList = (pokemon) => {

    const pokemonsCopy = POKEMONS.filter(poke => {
      const pokemonName = poke.name.toLowerCase()
      if (pokemon && !pokemonName.includes(pokemon)) {
        return false
      }
      return true
    })

    setPokemons(pokemonsCopy)
  }

  return (
    <div className="relative">
      <SearchBar setPokelist={handlePokeList}/>
      <PokemonList pokemons={pokemons}/>
      {/* <BtnCreate /> */}
    </div>
  )
}

export default Home