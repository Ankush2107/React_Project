import { useEffect, useState } from "react"
import axios from 'axios'
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {

    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true, 
        pokedexUrl: "https://pokeapi.co/api/v2/pokemon/",
        nextUrl: '',
        prevUrl: ''
    })

    async function downloadPokemons() {

        setPokemonListState((state) => ({ ...state, isLoading: true }));

        const response = await axios.get(pokemonListState.pokedexUrl); // This downloads list of 20 pokemons

        const pokemonResult = response.data.results; // We get the array pokemon from results which is having name and Url properties

        setPokemonListState((state) => ({
                ...state,
                nextUrl: response.data.next,
                prevUrl: response.data.previous
            }));

        // Iterating over the array of pokemons, and using there url, to create an array of promises.
        // That will download those 20 pokemons.
        const pokemonResultPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url))

        // passing that promise array to axios.all
        const pokemonData = await axios.all(pokemonResultPromise) // array of 20 pokemon detailted data

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
        setPokemonListState({
                ...pokemonListState,
                pokemon: pokeListResult,
                isLoading: false
        })
    }

    useEffect(async() => {
        await downloadPokemons()
    }, [pokemonListState.pokedexUrl]);


    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper">
                {(pokemonListState.isLoading) ? 'Loading...' : 
                    pokemonListState.pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />)
                }
            </div>
            <div className="control">
                <button disabled={pokemonListState.prevUrl === null} onClick={() => setPokemonListState({...pokemonListState, pokedexUrl: pokemonListState.prevUrl})}>Prev</button>
                <button disabled={pokemonListState.nextUrl === null} onClick={() => setPokemonListState({...pokemonListState, pokedexUrl: pokemonListState.nextUrl})}>Next</button>
            </div>  
        </div>
    )
}

export default PokemonList