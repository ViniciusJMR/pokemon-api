import {useEffect,useState} from "react";
import axios from "axios"

import './style.css'
import SearchBar from "./SearchBar";
import { BASE_URL } from "../../utils/request";
import { type } from "@testing-library/user-event/dist/type";

const pokemon = [
{ name: "Belgium", continent: "Europe" },
{ name: "India", continent: "Asia" },
{ name: "Bolivia", continent: "South America" },
{ name: "Ghana", continent: "Africa" },
{ name: "Japan", continent: "Asia" },
{ name: "Canada", continent: "North America" },
{ name: "New Zealand", continent: "Australasia" },
{ name: "Italy", continent: "Europe" },
{ name: "South Africa", continent: "Africa" },
{ name: "China", continent: "Asia" },
{ name: "Paraguay", continent: "South America" },
{ name: "Usa", continent: "North America" },
{ name: "France", continent: "Europe" },
{ name: "Botswana", continent: "Africa" },
{ name: "Spain", continent: "Europe" },
{ name: "Senegal", continent: "Africa" },
{ name: "Brazil", continent: "South America" },
{ name: "Denmark", continent: "Europe" },
{ name: "Mexico", continent: "South America" },
{ name: "Australia", continent: "Australasia" },
{ name: "Tanzania", continent: "Africa" },
{ name: "Bangladesh", continent: "Asia" },
{ name: "Portugal", continent: "Europe" },
];

function PokemonList(){
        const [searchInput, setSearchInput] = useState("")
        const [apiResp, setApiResp] = useState([])



        useEffect(() => {
            const {search} = window.location
            const s = new URLSearchParams(search).get('s')
            console.log(s)

            if(s === null){
                axios.get(`${BASE_URL}/pokemon/`)
                    .then(response => {
                        setApiResp(JSON.stringify(response))
                        console.log(apiResp)
                    })
            }
            else{
                axios.get(`${BASE_URL}/pokemon/${s}`)
                    .then(response => {
                        // setApiResp(response.data.content)
                        setApiResp(JSON.stringify(response))
                        console.log(apiResp)
                    })

            }


        }, [])


    return (
        <div className="flex-child">
            <SearchBar/>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Base EXP</th>
                </tr>
            </thead>
            <tbody >
            {Object.keys(apiResp).map((data,index) => {
                return (
                <tr key={index}>
                    <td>{data}</td>
                    <td>{data}</td>
                </tr>)
            })}
            </tbody>
            </table>
        </div>
    )
}


export default PokemonList