import Logo from "./components/Logo"
import PokemonList from "./components/PokemonList"
import SearchBar from "./components/SearchBar"

import bulbizarre from './assets/bulbizarre.png';
import herbizarre from './assets/herbizarre.png';
import florizarre  from './assets/florizarre.png';
import salameche from './assets/salameche.png';
import reptincel  from './assets/reptincel.png';
import dracaufeu from './assets/dracaufeu.png';
import carapuce  from './assets/carapuce.png';
import carabaffe from './assets/carabaffe.png';
import tortank from './assets/tortank.png';
import chenipan from './assets/chenipan.png';
import chrysacier from './assets/chrysacier.png';
import papilusion from './assets/papilusion.png';
import { useState } from "react";

const PokeList = [
  {
      name: "Bulbizarre",
      image: bulbizarre,
      category: [
          {
              name: "Plante",
              color: "#9bcc50",
          },
          {
              name: "Poisson",
              color: "#b97fc9",
          },
      ]
  },
  {
      name: "Herbizarre",
      image: herbizarre,
      category: [
          {
              name: "Plante",
              color: "#9bcc50",
          },
          {
              name: "Poisson",
              color: "#b97fc9",
          },
      ]
  },

  {
      name: "Florizarre",
      image: florizarre ,
      category: [
          {
              name: "Plante",
              color: "#9bcc50",
          },
          {
              name: "Poisson",
              color: "#b97fc9",
          },
      ]
  },

  {
      name: "Salamèche",
      image: salameche  ,
      category: [
          {
              name: "Feu",
              color: "#fd7d24",
          }
      ]
  },

  {
      name: "Reptincel",
      image: reptincel,
      category: [
          {
              name: "Feu",
              color: "#fd7d24",
          }
      ]
  },

  {
      name: "Dracaufeu",
      image: dracaufeu,
      category: [
          {
              name: "Feu",
              color: "#fd7d24",
          },
          {
              name: "Vol",
              color: "#3dc7ef",
          }
      ]
  },

  
  {
      name: "Carapuce",
      image: carapuce,
      category: [
          {
              name: "Eau",
              color: "#4592c4",
          }
      ]
  },

  {
      name: "Carabaffe",
      image: carabaffe,
      category: [
          {
              name: "Eau",
              color: "#4592c4",
          }
      ]
  },

  {
      name: "Tortank",
      image: tortank,
      category: [
          {
              name: "Eau",
              color: "#4592c4",
          }
      ]
  },


  {
      name: "Chenipan",
      image: chenipan,
      category: [
          {
              name: "Insecte",
              color: "#729f3f",
          }
      ]
  },

  {
      name: "Chrysacier",
      image: chrysacier,
      category: [
          {
              name: "Insecte",
              color: "#729f3f",
          }
      ]
  },

  {
      name: "Papilusion",
      image: papilusion,
      category: [
          {
              name: "Insecte",
              color: "#729f3f",
          },
          {
              name: "Vol",
              color: "#3dc7ef",
          }
      ]
  },
]


function App() {

  const [pokemons, setPokemons] = useState(PokeList)

  const handlePokeList = (pokemon) => {

    const pokemonsCopy = PokeList.filter(poke => {
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
      <Logo/>
      <SearchBar setPokelist={handlePokeList}/>
      <PokemonList pokemons={pokemons}/>


    </>
  )
}

export default App
