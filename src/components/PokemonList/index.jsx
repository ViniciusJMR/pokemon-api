import { useEffect, useRef, useState } from "react";
import axios from "axios"

import './style.css'
import SearchBar from "./SearchBar";
import { BASE_URL } from "../../utils/request";


function PokemonList() {
    // const [searchInput, setSearchInput] = useState("")
    const [apiResp, setApiResp] = useState([])
    const dataRef = useRef(false)
    let pokemons = []
    let MAX_POKEMON_COUNT = 151

    const getPokemon = async id =>{
        let res = await axios.get(`${BASE_URL}/pokemon/${id}`)
        pokemons.push(res.data)
        setApiResp(pokemons)
        return res
    }

    useEffect(() => {
        // Evita que o código execute mais de uma vez na desenv
        //TODO: Analizar uma forma melhor de evitar que useeffect seja executado
        //      Mais de uma vez na desenv
        if (dataRef.current) return;
        dataRef.current = true

        // for (let id = 1; id <= MAX_POKEMON_COUNT; id++) {
        //     axios.get(`${BASE_URL}/pokemon/${id}`)
        //         .then(response => {
        //             pokemons.push(response.data)
        //             setApiResp(pokemons)
        //         })
        // }
        
        const ids = Array.from({length:MAX_POKEMON_COUNT}, (v,k) => k+1)
        Promise.all(ids.map(id => getPokemon(id)))
    }, [])


    return (
        <div className="flex-child">
            <SearchBar />
            <ul>
                {
                    apiResp.map((p) => {
                        return (
                            <li key={p.id}>
                                {p.id}. {p.name}
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}


export default PokemonList