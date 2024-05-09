import { Outlet } from 'react-router-dom';
import pokemonLogo from '../assets/logo-pokemon.png';

function Layout() {
  return (
    <div className="px-4 md:px-6 lg:px-56 py-5">
        <div className='flex justify-center'>
            <img src={pokemonLogo} alt=""  className='w-72' />
        </div>
        <Outlet/>
    </div>
  )
}

export default Layout