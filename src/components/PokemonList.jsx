import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PokemonList({ pokemons }) {


  return (

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
        {pokemons.map((pokemon) => 
            <Link 
                to={`detail/${pokemon.id}`}
                className="card p-5 bg-slate-50 hover:shadow-2xl cursor-pointer" 
                key={pokemon.name}>
                <img src={pokemon.image} alt="" />
                <div>
                    <h5 className='text-2xl'>{pokemon.name}</h5>
                    <div className='flex gap-2'>
                        {pokemon.category.map((category) =>
                            <span 
                                key={category.name} 
                                style={{backgroundColor:category.color}}
                                className='rounded-md w-24 flex justify-center items-center text-white'
                            >{category.name}</span>
                        )}
                    </div>
                </div>
            </Link>
        )}
    </div>
  )
}
PokemonList.propTypes = {
    pokemons: PropTypes.array
}

export default PokemonList