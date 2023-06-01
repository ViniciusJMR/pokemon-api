
function SearchBar({search, setSearch}) {

    const handleChange = e => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    return (
        <input
            type="text"
            placeholder="Search Pokemon"
            onChange={handleChange}
            value={search}
        />
    )
}

export default SearchBar