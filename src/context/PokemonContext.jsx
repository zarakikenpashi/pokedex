import PropTypes from 'prop-types';
import { createContext, useState } from "react";
import POKEMONS from "../data/POKEMON";

export const PokemonContext = createContext()

export const PokemonContextProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState(POKEMONS)

    const addPokemons = (pokemon) => {
        const pokemonsCopy = [...pokemons]
        pokemonsCopy.push(pokemon)
        setPokemons(pokemonsCopy)
    }

    const handleSearch = (pokemon) => {
        const pokemonsCopy = pokemons.filter(poke => {
            const pokemonName = poke.name.toLowerCase()
            if (pokemon && !pokemonName.includes(pokemon)) {
                return false
            }
            return true
        })

        setPokemons(pokemonsCopy)
    }

    const handleDelete = (id) => {
        const pokemonsCopy = pokemons.filter((pokemon) => pokemon.id !== id);
        setPokemons(pokemonsCopy)
    }

    return(
        <PokemonContext.Provider value={{pokemons,addPokemons,setPokemons,handleSearch,handleDelete}}>
            { children }
        </PokemonContext.Provider>
    )
}

PokemonContextProvider.propTypes = {
    children: PropTypes.object
}


