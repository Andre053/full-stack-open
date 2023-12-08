# phonebook
- Keeps a list of names and their corresponding numbers
- Allows dynamic search of the phonebook
- User can add name and numbers to the phonebook

## Features
- Utilizes array of object state
- Checking for resistance within state
- Adding entries to state
- Filtering state responsively
- Input checks for empty entries


## Challenges
- Would not display the names when component returned a react <> with a map within
- When implementing the filter, the component is only updated after a new event
    - SOLVED: Was executing function without updated state since passed by value
- when typing into input, it is deselected after each char
- The filtered state stays the same when adding a new entry, therefore it will not be checked until the filter is interacted with again
    - BAD SOLUTION: Abstract the update filter function so it can be called manually, or with the event handler. Call it manually when a new entry is added
        -> Since the persons array being used by the function is not the up to date one, nothing changes
    - WORKAROUND: Set the filter to the full phonebook, clear the filter
