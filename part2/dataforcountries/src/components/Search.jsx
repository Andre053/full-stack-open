const Search = ({ filter, handler }) => {
    return (
        <>
            <div>
                Find counties: <input onChange={handler}></input>
            </div>
        </>
    )
}

export default Search