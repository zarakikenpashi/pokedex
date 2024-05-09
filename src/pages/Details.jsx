import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import POKEMONS from "../POKEMONS"

function Details() {
    const { detailId } = useParams()
    const [pokemons, setPokemons] = useState(null)

    useEffect(() => {

        const pokemonFetch = () => {
            const newPokemon = POKEMONS.find(poke => poke.id === parseInt(detailId))
            setPokemons(newPokemon)
        }

        pokemonFetch()
        return () => pokemonFetch()
    })



    /*Affiche une page d'erreur si on ne trouve pas de pokemons*/
    if (!pokemons) {
        return <p>Désolé le pokemon recherché existe pas</p>
    }

  return (
    <div className="bg-white mt-10 p-5" >
        <h2 className="text-center text-5xl py-5">{ pokemons.name }</h2>
        <div className="md:flex gap-5">
            <div className="bg-slate-50 w-2/3"><img src={ pokemons.image } alt="" className="w-full"/></div>
            {/* Section description */}
            <div className="text-2xl">
                <p className="">{ pokemons.description }</p>


                {/* Section caracteristiques */}
 

                    <div className="py-10">
                        <div className="">
                            <h5>Type(s)</h5>
                                <div className='flex gap-2'>
                                    {pokemons.category.map((category) =>
                                        <span
                                            key={category.name}
                                            style={{backgroundColor:category.color}}
                                            className='rounded-md w-24 flex justify-center items-center text-white'
                                        >
                                        {category.name}
                                        </span>
                                    )}
                                </div>
                        </div>
                        <div className="mt-5">
                            <h5>Faiblesse(s)</h5>
                            <div className='flex gap-2'>
                                {pokemons.faiblesse.map((category) =>
                                    <span
                                        key={category.name}
                                        style={{backgroundColor:category.color}}
                                        className='rounded-md w-24 flex justify-center items-center text-white'
                                    >
                                    {category.name}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div> 
                 
            
            </div>
        </div>
    
    </div>
  )
}

export default Details