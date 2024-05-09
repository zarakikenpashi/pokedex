import { useState } from "react"
import POKEMONS from "../POKEMONS"
import SearchBar from "../components/SearchBar"
import PokemonList from "../components/PokemonList"

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
    <>
      <SearchBar setPokelist={handlePokeList}/>
      <PokemonList pokemons={pokemons}/>
    </>
  )
}

export default Home