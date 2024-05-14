import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
function PokemonItem({name,image,id}) {
  return (
    <div 
        className="card p-5 bg-slate-50 hover:shadow-2xl relative" 
        key={name}>
        <img src={image} alt="" />
        <h5 className='text-2xl'>{name}</h5>
        <Dropdown pokemonId={id}/>
        
    </div>
  )
}

PokemonItem.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number
}
export default PokemonItem