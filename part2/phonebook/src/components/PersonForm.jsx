const PersonForm = ({ name, number, handleSubmit, handleNameChange, handleNewNumber }) => (
    <>
      <h3>Add a new entry</h3>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={name} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={number} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
)

export default PersonForm