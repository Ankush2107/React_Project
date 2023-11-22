import { useEffect, useState } from "react"
import axios from 'axios'
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {

    setIsLoading(true);

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const [pokedexUrl, setPokedexUrl] = useState("https://pokeapi.co/api/v2/pokemon/")

    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');

    async function downloadPokemons() {

        const response = await axios.get(pokedexUrl); // This downloads list of 20 pokemons

        const pokemonResult = response.data.results; // We get thew array pokemon from results

        console.log(response.data);
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
        // Iterating over the array of pokemons, and using there url, to create an array of promises.
        // That will download those 20 pokemons.
        const pokemonResultPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url))


        // passing that promise array to axios.all
        const pokemonData = await axios.all(pokemonResultPromise) // array of 20pokemon detailted data


        // now iterate on the data of each pokemon, and extract id, name, image, type
        const pokeListResult = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                type: pokemon.types
            }
        })
        setPokemonList(pokeListResult)

        setIsLoading(false)
        
    }

    useEffect(async() => {
        downloadPokemons()
    }, [pokedexUrl]);


    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper">
                {(isLoading) ? 'Loading...' : 
                    pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} />)
                }
            </div>
            <div className="control">
                <button disabled={prevUrl === null} onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
                <button disabled={nextUrl === null} onClick={() => setPokedexUrl(nextUrl)}>Next</button>
            </div>  
        </div>
    )
}

export default PokemonList