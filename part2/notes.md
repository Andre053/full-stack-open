# PART 2
## a Rendering a collection, modules
- TIP: Do not concat variables when printing to console, separate with comma
- TIP: VS Code snippets can improve productivity by automating writing boilerplate code
- Functional members of JavaScript array: find, filter, and map
    - Higher order functions: Functions are values
- Rendering collections
    - A collection is an array or iterator type
    - Each value of a collection must have a unique id or key' (ideally, not it's index)
        - NOTE: The *key* of an element uniquely identifies it within the DOM
        - Index as a key can break the app and display incorrect data
        - Issues can arise if the collection changes during execution, causing the unique id to change depending on the new index

    - Pass this key to the element of the collection item
- Map creates a new collection created from the elements of the original array by *mapping*
    - Useful for extracting info from each element into a separate collection
    - Useful for creating elements with values of a collection
- Code can be separated into multiple files, called modules
    - ES6-module for each component 
    - Modules must be imported
    - Component modules often placed in a directory called *components* within the *src* directory
    - Export a function with `export default <name>`

## b Forms
- Controlled component: Assigning a component's state as the *value* attribute of the *input* element allows the component to **control** the behavior of the input element
    - Editing must be enabled with an *event handler* to sync changes to the input with the component's state
    - NOTE: No default action occurs on an input change, unlike a form submission
- TIP: Use *concat* to update state, it makes a copy
    - NEVER mutate state directly

## c Getting data from server
- json-server as a basic server for testing
    - Must be added as the server in the package.json file
- axios for easy to use http handling
    - Utilizes promises
- npm install can be different depending on the dependency
    - By default, installs as runtime dependency
    - --save-dev means development dependency
        - Ex. json-server
- **Promises**
    - A promise is an object representing the eventual completion or failure of an async operation
    - A promise can have three distinct states:
        1. Pending. The final value is not available yet
        2. Fulfilled. The operation has been completed and the final value is available, generally successful
        3. Rejected. An error prevented the final value from being determined, generally failed
    - To access the result of the operation represented by a promise, an event-handler must be registered
        - This is done by the method `.then()`
        - The JavaScript runtime environment calls the callback function registered by the *then* method, providing ti with a *response* object as a parameter
        - Storing the *promise object* is generally unnecessary, instead it is common to chain the *then* method call to the axios method call
        - Data returned is parsed by axios
- **Effect-hooks**
    - The Effect Hook lets you perform side effects on function components
    - The useEffect function is called whenever an effect is triggered 
    - By default, the effect is *always* run after the component has been rendered
        - Can choose to fire it only when *certain values* have changed
- **The development runtime environment**
    - JavaScript code making up the React app is run in the browser
    - Browser gets the JavaScript from the *React dev server*, running from `npm run dev`
    - The dev-server transforms the JavaScript into a format for the browser, stitching together JavaScript from different files into one file
    - The React app in the browser feteches the JSON formatted data from *json-server* running on 
    - The data comes from the *json-server*
    - For this app, the whole app resides on the software developers machine

# d Altering data in server
- REST
    - Individual data objects are *resources*
    - Every resource has a unique address associated with it, the *URL*
    - Resources fetched with *HTTP GET* requests
    - Creating a new resource requires an *HTTP POST* request
        - Data is sent in the *body* of the request
- json-server requires all data to be send in JSON format
    - Data must be correctly formatted by containing the *Content-Type* request header with the value *application/json*
- NOTE: When uploading content, do not forget to update the state
- TIP: Look out for references to state, make copies instead of changing
- Separate functions into modules, import all using `export default { <name>: <func>,... }`
    - You do not need to add the name if it is equal to the func name
- TIP: Make helper functions call the `.then(res => res.data)` to simplify use 
- Promise error handling
    - Use the `.catch(error => ...)` method to handle *rejected* promises
    - Uncommonly, you can add a second callback to `.then` to handle the rejection 
# Full stack developer's oath 
- I will have my browser developer console open at all times
- I will use the network tab to ensure that frontend and backend are communicating as I expect
- I will constantly keep an eye on the state of the server

# e Adding Styles to React app
- Styles can be added with the *index.css* file 
- Specify where to apply by using *class selectors*
    - Add `className` to components
- Write styles directly in the code with *inline styles*
    - Implemented as a JavaScript object set to the *style attribute*
    - NOTE: Hyphenated CSS properties are written in camelCase when using inline in JavaScript
    - LIMITATION: Pseudo-classes cannot be used straigtforwardly
- Traditionally, HTML, CSS, and JavaScript would all reside in separate files 
    - This does not scale well
    - React component defines HTML for structuring the content, the JavaScript functions for determining functionality, and the component's styling, all in one place
# Important Remarks
- State should be set as *null* initially, but this can cause issues
    - TIP: Init to *null* can cause issues if you plan to render items using functional methods
    - SOLUTION: Set the state to a good zero value, such as an empty array
    - BETTER SOLUTION: Use *conditional rendering*
        - Return null if the component state is not initialized yet
- useEffect
    - The second parameter specifies how often the effect is run
    - Effect is always executed after the first render of the component *and* when the value of the second parameter changes
# Exercise Takeaways
- How to handle id when having components in a list
    - **NOTE** Must pass the key into the component, not a prop to be accessed
- Delete is a reserved word in JS
- Difficult to keep track of everything requiring an update during backend requests
- Update frontend state manually, saving the call to the backend for the update
    - Likely always faster?
    - Adds additional lines 
- Maybe extract handlers into a separate file, especially long ones

