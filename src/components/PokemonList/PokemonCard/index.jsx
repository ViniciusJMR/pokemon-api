import axios from 'axios'
import { useRef,useEffect, useState } from 'react'
import { BASE_URL } from '../../../utils/request'

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
                <div className='card-container'>
                    <img src={info.sprites.front_default} alt={info.name} />
                    <h6/>{info.id}. {info.name}
                </div>
            }
        </>
    )
}

export default PokemonCard