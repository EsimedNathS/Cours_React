import React from 'react'
import './App.css'
import PokeForm from './PokeForm'
import PokeItem from './PokeItem'
import { ToastContainer } from 'react-toastify';

function App() {
  const [pokemon, setPokemon] = React.useState({name:'', image:'', type:'', isFind:false});

  return (
<div className="flex flex-col items-center h-screen">
  <div className="w-full flex justify-center mt-4">
    <PokeForm setPokemon={setPokemon} pokemon={pokemon} />
  </div>
  <div className="flex-grow flex justify-center items-center w-full">
    <div className="bg-black rounded-xs w-3/4 h-3/4 flex justify-center items-center">
      <PokeItem pokemon={pokemon}/>
    </div>
  </div>
  <ToastContainer />
</div>
  )
}

export default App
