const Filter = ({ searchVal, handleSearch}) => (
    <>
      <h3>Search by name</h3>
      <div>
        Filter phonebook: <input value={searchVal} onChange={handleSearch}/>
      </div>
    </>
)


export default Filter