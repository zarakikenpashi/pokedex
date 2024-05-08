import PropTypes from 'prop-types';

function PokemonList({ pokemons }) {


  return (
    <div className="px-4 md:px-6 lg:px-56 py-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
        {pokemons.map((pokemon) => 
            <div className="card p-5 bg-slate-50 hover:shadow-2xl cursor-pointer" key={pokemon.name}>
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
                
            </div>
        
        )}

        
        </div>
    
    
    
    </div>
  )
}
PokemonList.propTypes = {
    pokemons: PropTypes.array
}

export default PokemonList