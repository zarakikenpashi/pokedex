import { useState } from "react";
import { Link } from "react-router-dom";

function Create() {
  const typeColor = [
    {
      name:'acier',
      color:'#9bcc50',
    },
        {
      name:'combat',
      color:'#b97fc9',
    },
        {
      name:'dragon',
      color:'#f16e57',
    },
        {
      name:'eau',
      color:'#4592c4',
    },
        {
      name:'électrik',
      color:'#eed535',
    },
        {
      name:'feu',
      color:'#fd7d24',
    },
        {
      name:'fée',
      color:'#fdb9e9',
    },
        {
      name:'glace',
      color:'#51c4e7',
    },
        {
      name:'insecte',
      color:'#729f3f',
    },
        {
      name:'normal',
      color:'#a4acaf',
    },
        {
      name:'plante',
      color:'#9bcc50',
    },
        {
      name:'poison',
      color:'#b97fc9',
    },
        {
      name:'psy',
      color:'#f366b9',
    },
        {
      name:'roche',
      color:'#a38c21',
    },
        {
      name:'sol',
      color:'#f7de3f',
    },
        {
      name:'spectre',
      color:'#7b62a3',
    },
        {
      name:'ténèbres',
      color:'#707070',
    },
        {
      name:'vol',
      color:'#3dc7ef',
    },
  ]



 const [inputName, setInputName] = useState('')
 const [inputImage, setInputImage] = useState('')
 const [inputDescription, setInputDescription] = useState('')
 const [inputType, setInputType] = useState([])

 const handleChecked = (e) =>{
  let categoryCopy = [...inputType]
  console.log(e.target.value);
  categoryCopy.push(e.target.value)
  setInputType(categoryCopy)
 }

 const handleSubmit = (e) => {
  e.preventDefault()

  const pokemon = {
    id: new Date().getTime(),
    name: inputName,
    image: inputImage,
    description: inputDescription
  }

  //console.log(pokemon);

  //localStorage.setItem('POKEMONS', JSON.stringify(pokemon));

  const storedData = localStorage.getItem('POKEMONS');
  const newData = [...JSON.parse(storedData)]
  newData.push(pokemon)
  localStorage.setItem('POKEMONS', JSON.stringify(newData))

  console.log(newData);
  

 }

  return (
    <div className="bg-slate-50 p-5 my-5">
      <div className="mb-2">
        <Link to="/" className="bg-green-400 p-1 text-white rounded">retour</Link>
      </div>

      <div>
        <form  action="submit" onSubmit={handleSubmit}>
          <div className="flex flex-col py-2">
            <label htmlFor="">Nom</label>
            <input 
              type="text"  
              className="bg-indigo-50 outline-none p-2 focus:ring-2  focus:ring-indigo-400 rounded-sm"
              placeholder="Entrez le nom du pokémon" 
              value={inputName}
              onChange={(e)=>setInputName(e.target.value)}
            />
          </div>

          <div className="flex flex-col py-2">
            <label htmlFor="">Image</label>
            <input 
              type="text"  
              className="bg-indigo-50 outline-none p-2 focus:ring-2  focus:ring-indigo-400 rounded-sm"
              value={inputImage}
              onChange={(e)=>setInputImage(e.target.value)}
            />
          </div>

          <div className="flex flex-col py-2">
            <label htmlFor="">Desciption</label>
            <textarea 
              name="" 
              id="" 
              rows="5"
              className="bg-indigo-50 outline-none p-2 focus:ring-2  focus:ring-indigo-400 rounded-sm"
              value={inputDescription}
              onChange={(e)=>setInputDescription(e.target.value)}
              ></textarea>
          </div>

          <div className="flex flex-col p-2 bg-indigo-50">
            <span className="pb-2">Selectionnez les types</span>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {typeColor.map((type)=> (
              <div className="flex gap-2 p-2 text-white" key={type.name} style={{backgroundColor:type.color}}>
                <input
                  type="checkbox"
                  name="category"
                  id={type.name}
                  className="default:ring-2 checked:bg-blue-500"
                  value={inputType}
                  onChange={ handleChecked }
                />
                <label htmlFor={type.name}>{type.name}</label>
              </div>
            ))}
            </div>
          </div>

          <div className="flex justify-end py-2 gap-5 text-white">
            <button type="reset" className="bg-blue-900 hover:bg-blue-950 p-2 rounded">Annuler</button>
            <button type="submit" className="bg-red-500 hover:bg-red-600 p-2 rounded">Enregistrer</button>
            
          
          </div>


        </form>
      
      </div>
    </div>
  )
}

export default Create