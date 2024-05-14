import { useContext, useState } from "react";
import { PokemonContext } from '../context/PokemonContext';

function SearchBar() {
    const {handleSearch} = useContext(PokemonContext)
    const [valeur, setvaleur] = useState('')

    const handleChange = (e) =>{
        setvaleur(e.target.value)
        handleSearch(e.target.value.toLowerCase())
    }

  return (
    <div className="px-4 md:px-6 lg:px-56 py-5">
        <div className="bg-white">
            <input 
                type="text" 
                className="w-full p-2 border-none outline-none"  
                placeholder="Entrez le nom du pokemon"
                value={valeur}
                onChange={handleChange} 
            />
        </div>
    </div>
  )
}


export default SearchBar