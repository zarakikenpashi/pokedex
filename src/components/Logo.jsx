import pokemonLogo from '../assets/logo-pokemon.png';
function Logo() {
  return (
    <div className='flex justify-center'>
        <img src={pokemonLogo} alt=""  className='w-72' />
    </div>
  )
}

export default Logo