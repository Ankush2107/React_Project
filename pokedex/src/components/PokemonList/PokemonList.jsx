import { useEffect, useState } from "react"
import axios from 'axios'
import './PokemonList.css'

function PokemonList() {

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    async function downloadPokemons() {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")

        console.log(response.data);
        // const pokemonResults = response.data.results;
        // const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        // const pokemonData = await axios.all(pokemonResultPromise)
        // console.log(pokemonData.data);
        // setPokemonList(pokemonData.map((pokeData) => {
        //     const pokemon = pokeData.data;
        //     return{name: pokemon.name, image: pokemon.sprites.other.dream_world.front_default, types: pokemon.types}
        // }))
        // setIsLoading(false)
    }

    useEffect(async() => {
        downloadPokemons()
    }, [])


    return (
        <div className="pokemon-list-wrapper">
            <div>Pokemon List</div>
            {(isLoading) ? 'Loading...' : 'Data downloaded'}
        </div>
    )
}

export default PokemonList