import { useState } from "react";
import PropTypes from 'prop-types';

function SearchBar({setPokelist}) {
    const [valeur, setvaleur] = useState('')

    const handleChange = (e) =>{
        setvaleur(e.target.value)
        setPokelist(e.target.value.toLowerCase())
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

SearchBar.propTypes = {
    setPokelist: PropTypes.func
}
export default SearchBar