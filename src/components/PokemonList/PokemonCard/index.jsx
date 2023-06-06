import axios from 'axios'
import { useRef, useEffect, useState } from 'react'
import { BASE_URL } from '../../../utils/request'

import capitalizeFirstLetter from '../../../utils/stringUtils'
import pathToPng from '../../../utils/pathToPng'
import typeColor from '../../../utils/typeColor'

import style from './style.css'

const gradientColors = (types) => {
    let gradient = "linear-gradient(45deg,"

    if (types.length > 1) {
        gradient += types.map((t) => {
            return " " + typeColor[t.type.name]
        })
        gradient += ")"
    }
    else
        gradient += `${typeColor[types[0].type.name]}, ${typeColor[types[0].type.name]})`
    return gradient
}

function PokemonCard({ pokemon, onSelectedChanged }) {
    const [info, setInfo] = useState({})
    const [isHover, setIsHover] = useState(false)
    const dataRef = useRef(false)

    const handleClick = () => {
        onSelectedChanged(info)
        window.scrollTo({top:0, behavior: 'smooth'})
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
                <div
                    className="card"
                    onClick={handleClick}
                    //TODO: Find better way to do this, as it's not working properlly
                    style={{ backgroundImage: isHover ? gradientColors(info.types): ''}}
                    // style={{ backgroundImage: gradientColors(info.types)}}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >

                    <img
                        className="img-card"
                        src={info.sprites.front_default}
                        alt={info.name} />

                    <h3 className="card-title">{capitalizeFirstLetter(info.name)}</h3>
                    {info.types.map((index) => {
                        return (
                            <img className="type-card" key={`${info.name}-${index.type.name}`}
                                src={pathToPng[index.type.name]} alt={index.type.name} />
                        )
                    })}
                </div>
            }
        </>
    )
}

export default PokemonCard