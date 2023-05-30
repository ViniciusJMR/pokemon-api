function SearchBar() {
    return (
        <form
            action="/"
            method="get"
        >
            <input
                type="text"
                className="search-input"
                placeholder="Search Pokemon"
                name="s"
            />
            <button type="submit" className="search-btn">OK</button>
        </form>
    )
}

export default SearchBar