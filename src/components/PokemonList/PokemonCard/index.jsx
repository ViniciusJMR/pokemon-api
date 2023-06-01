import axios from 'axios'
import { useRef,useEffect, useState } from 'react'
import { BASE_URL } from '../../../utils/request'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function PokemonCard({pokemon}){
    const [info, setInfo] = useState({})
    const dataRef = useRef(false)
    

    useEffect(() => {
        if (dataRef.current) return;
        dataRef.current = true

        axios.get(`${BASE_URL}/pokemon/${pokemon.name}`)
            .then(response => {
                setInfo(response.data)
            })
            .catch(error => console.log(`Error: ${error}`))

    }, [])

    return (
        <>
            { 'id' in info &&
                <div >
                    <img src={info.sprites.front_default} alt={info.name} />
                    <h3>{capitalizeFirstLetter(info.name)}</h3>
                </div>
            }
        </>
    )
}

export default PokemonCard