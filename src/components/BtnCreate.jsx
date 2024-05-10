import { Link } from "react-router-dom"

function BtnCreate() {
  return (
    <Link 
        className="fixed left-0 bg-cyan-500 hover:bg-cyan-600 top-[50%] p-5 text-white rounded"
        to="/create">
        Ajouter
    </Link>
  )
}

export default BtnCreate