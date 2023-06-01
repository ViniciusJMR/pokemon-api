import { useEffect, useRef, useState } from "react";
import axios from "axios"

import './style.css'
import SearchBar from "./SearchBar";
import PokemonCard from "./PokemonCard";
import { BASE_URL } from "../../utils/request";


function PokemonList() {
    const MAX_POKEMON_COUNT = 151
    const dataRef = useRef(false)

    const [apiResp, setApiResp] = useState([])

    const [search, setSearch] = useState("")

    useEffect(() => {
        // Evita que o código execute mais de uma vez na desenv
        //TODO: Analizar uma forma melhor de evitar que useeffect seja executado
        //      Mais de uma vez na desenv
        if (dataRef.current) return;
        dataRef.current = true

        axios.get(`${BASE_URL}/pokemon?limit=${MAX_POKEMON_COUNT}`)
            .then(response => {
                setApiResp(response.data.results)
            })
            .catch(error => console.log(`Error: ${error}`))
    }, [])

    let filteredResp = search.length > 0
        ? apiResp.filter(p => p.name.toLowerCase().includes(search))
        : []

    console.log("montou...")


    return (
        <div className="flex-child">
            <SearchBar search={search} setSearch={setSearch} />
            {search.length > 0 ? (
                <ul>
                    {filteredResp
                        .map(p => {
                            return (
                                <li key={p.name}>
                                    <PokemonCard pokemon={p} />
                                </li>
                            )
                        })}
                </ul>

            ) : (
                <ul>
                    {apiResp
                        .map(p => {
                            return (
                                <li key={p.name}>
                                    <PokemonCard pokemon={p} />
                                </li>
                            )
                        })}
                </ul>

            )
            }
        </div>
    )
}


export default PokemonList