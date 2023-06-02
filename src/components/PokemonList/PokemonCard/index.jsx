import axios from 'axios'
import { useRef, useEffect, useState, useContext } from 'react'
import { BASE_URL } from '../../../utils/request'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function PokemonCard({ pokemon, onSelectedChanged }) {
    const [info, setInfo] = useState({})
    const dataRef = useRef(false)

    const handleClick = () => {
        onSelectedChanged(info)
    }

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
            {'id' in info &&
                <div onClick={handleClick}>

                    <img src={info.sprites.front_default} alt={info.name} />
                    <h3>{capitalizeFirstLetter(info.name)}</h3>
                </div>
            }
        </>
    )
}

export default PokemonCard