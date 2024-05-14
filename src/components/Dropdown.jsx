import PropTypes from 'prop-types';
import { useContext, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { PokemonContext } from "../context/PokemonContext";

function Dropdown({pokemonId}) {
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const [isOpen, setIsOpen] = useState(false)

    const {handleDelete} = useContext(PokemonContext)

    const onDelete = () => {
        handleDelete(pokemonId)
    }

  return (
    <div className="absolute top-0 right-0">
        <button onClick={toggleDropdown}
                className="cursor-pointer w-full flex items-center p-2 border-slate-50 border-2 focus:border-blue-700 focus:rounded-full">
                <SlOptionsVertical />
        </button>
        {isOpen && 
            <ul className="absolute top-[3rem] left-[-5rem] right-0 bg-slate-100 p-2 rounded">
                <li><button>voir</button></li>
                <li><button>Editer</button></li>
                <li><button onClick={onDelete}>Supprimer</button></li>
            </ul>
        }
    </div>
    
  )
}
Dropdown.propTypes = {
    pokemonId: PropTypes.number
}

export default Dropdown