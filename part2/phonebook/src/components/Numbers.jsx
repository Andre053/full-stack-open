const Numbers = ({ persons }) => {
    return (
        <>
        <h3>Numbers</h3>
        {persons.map(person => <div key={person.name}>{person.name} - {person.number}</div>)}
        </>
    )
}

export default Numbers