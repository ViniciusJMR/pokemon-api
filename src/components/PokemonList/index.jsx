import {useEffect,useState} from "react";
import axios from "axios"

import './style.css'
import SearchBar from "./SearchBar";
import { BASE_URL } from "../../utils/request";


function PokemonList(){
        const [searchInput, setSearchInput] = useState("")
        const [apiResp, setApiResp] = useState([])


        useEffect(() => {
                axios.get(`${BASE_URL}/pokemon/?offset=0&limit=151`)
                    .then(response => {
                        setApiResp(response.data.results)
                        console.log(response.data.results)
                    })

        }, [])


    return (
        <div className="flex-child">
            <SearchBar/>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody >
            {apiResp.map((p) => {
                return (
                <tr>
                    <td>{p.name}</td>
                </tr>)
            })}
            </tbody>
            </table>
        </div>
    )
}


export default PokemonList