import { useEffect, useRef, useState } from "react";
import axios from "axios"

import './style.css'
import SearchBar from "./SearchBar";
import PokemonCard from "./PokemonCard";
import { BASE_URL } from "../../utils/request";


function PokemonList() {
    // const [searchInput, setSearchInput] = useState("")
    const [apiResp, setApiResp] = useState([])
    const dataRef = useRef(false)
    const pokemons = []
    const MAX_POKEMON_COUNT = 151
 
    useEffect(() => {
        // Evita que o código execute mais de uma vez na desenv
        //TODO: Analizar uma forma melhor de evitar que useeffect seja executado
        //      Mais de uma vez na desenv
        if (dataRef.current) return;
        dataRef.current = true

        axios.get(`${BASE_URL}/pokemon?limit=${MAX_POKEMON_COUNT}`)
            .then(response =>{
                // pokemons.push(response.data.results)
                setApiResp(response.data.results)
            })
            .catch(error => console.log(`Error: ${error}`))
    }, [])


    return (
        <div className="flex-child">
            <SearchBar />
            <ul>
                {
                    apiResp.map((p) => {
                        return (
                            <li key={p.name}>
                                <PokemonCard pokemon={p} />
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}


export default PokemonList