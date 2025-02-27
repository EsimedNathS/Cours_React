import React from 'react'
import getPokemonByName from './PokeAPI.js'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";
import CircularProgress from '@mui/material/CircularProgress';

function PokeForm({setPokemon, pokemon}) {

    const [pokemonName, setPokemonName] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const pokeData = await getPokemonByName(pokemonName);
        setPokemon(
            {name: pokeData.name, 
            type: pokeData.types[0].type.name, 
            image: pokeData.sprites.back_default,
            isFind:true}
        )
        setIsLoading(false);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label="Name" 
                    variant="outlined" 
                    value={pokemonName.name}
                    onChange={(e) => setPokemonName(e.target.value)}
                />
                <Button variant="contained" type="submit" endIcon={<FaSearch />}>Search</Button>
            </form>
            {isLoading && <CircularProgress />}
        </div>
    )
}

export default PokeForm