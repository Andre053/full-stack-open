const Result = ({ countryList, countryFound }) => {
    if (countryFound != null) {
        const country = countryFound
        const capitals = countryFound["capital"]
        const languages = countryFound["languages"]
        const languageKeys = Object.keys(languages)
        console.log(capitals, languages, languageKeys)
        return (
            <>
                <h1>{country["name"]["common"]}</h1>
                <p>
                    Capital: {capitals.toString()}
                </p>
                <p>
                    Area: {country["area"]} 
                </p>
                <p><b>Languages:</b></p>
                <ul>
                   {languageKeys.map(k => <li key={k}>{languages[k]}</li>)} 
                   {languageKeys.forEach(k => console.log(k, languages[k]))} 
                </ul>  
                <p className="flag">
                    {country.flag}
                </p>
            </>
           
        )
    }
    if (countryList == null) return <p>Search for a country</p>
    if (countryList.length > 10) return <p>Too many options, narrow your search...</p>
    return (
        <>
            <ul>
                {countryList.map(name => <li key={name}>{name}</li>)}
            </ul>
        </>
    )
}

export default Result