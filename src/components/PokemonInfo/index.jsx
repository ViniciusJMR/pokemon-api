import capitalizeFirstLetter from "../../utils/stringUtils"
import pathToPng from "../../utils/pathToPng"

import './style.css'

function PokemonInfo({ selected }) {
    return (
        <>
            {'id' in selected &&
                <div className="flex-child title">
                    <h1>{capitalizeFirstLetter(selected.name)}</h1>
                    <h3>Pokedex index: {selected.id}</h3>

                    <img 
                    className="img-info"
                    src={selected.sprites.front_default} 
                    alt={selected.name} />
                    <img 
                    className="img-info"
                    src={selected.sprites.back_default} 
                    alt={selected.name} />
                    <p/>

                    {selected.types.map((index) => {
                        return (
                            <img className="type-info"
                            src={pathToPng[index.type.name]} alt={index.type.name}/>
                        )
                    })}
                    {/* <p>{selected.types.map((index) =>{
                        return `| ${capitalizeFirstLetter(index.type.name)} `
                    })} |</p> */}

                    <p>Height: {selected.height / 10} m</p>
                    <p>Weight: {selected.weight / 10} Kg</p>

                    <ul>
                        {selected.stats.map((stats) => {
                            return (
                                <li>
                                    <label htmlFor="base_stat">
                                        {capitalizeFirstLetter(stats.stat.name)+ ": "}
                                    </label>
                                    <progress id="base_stat" value={stats.base_stat} max="255"/>
                                    {" " + stats.base_stat}/255
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
        </>
    )
}


export default PokemonInfo