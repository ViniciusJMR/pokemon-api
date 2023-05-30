import PropTypes from 'prop-types'

function PokemonCard({name, power}){
    return (
        <>
            <li>Nome = {name} - Power = {power}</li>
        </>
    )
}

PokemonCard.propTypes = {
    name: PropTypes.string.isRequired,
    power: PropTypes.number
}

export default PokemonCard