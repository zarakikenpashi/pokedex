import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import PokemonItem from './PokemonItem';

function PokemonList() {
  const {pokemons} = useContext(PokemonContext)
  
  return (
    <div className="px-4 md:px-6 lg:px-56 py-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
          {pokemons.map((pokemon) => 
              <PokemonItem key={pokemon.id} name={pokemon.name} image={pokemon.image} id={pokemon.id}/>
          )}
      </div>
    </div>
  )
}


export default PokemonList