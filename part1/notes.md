# PART 1

## a Introduction to React
- Node package manager (npm)
- Vite is a tool to create a React template
- Vite
    - Hosted on localhost port 5173
    - App code resides in the *src* folder
- Old alternative to Vite is create-react-app
- React component readers content into a *div*-element
    - React components do not return HTML, but is mostly written in JSX
    - JSX compiles to JavaScript, compiled by Babel

## b JavaScript
- Variables should be defined with the `let` or `const` keywords
- Arrays utilize `[]`
    - Methods include: push, pop, length, forEach, concat, map
    - The forEach method receives a function with a single variable
    - `array.forEach(value => { console.log(value) })`
    - Map transforms the values of the array; receives a function
- The `...<variable name>` syntax destructs values into the variable
- Arrow functions are the most common functinal syntax
- Objects bundle together types
    - Similar to structs, but not a unique type
- With React Hooks, we do not need to define objects with methods
- Arrow functions and functions defined with `function` vary on their behavior with respect to the `this` keyword
    - The value of *this* is defined based on how the method was called
    - When called through a *reference*, it becomes the *global object* 
    - Can use the `bind` method to preserve the original *this*
    - Arrow functions solve this problem inherently, but cannot be used as methods
- Classes are just objects with syntactic sugar
    - Support for constructors and methods

## c Component state, event handlers
### Destructuring
- Using embeded functions is common in JavaScript
- Destructure an object, does not need equal values, just same names 
    - `{ var1, var2 } = varStruct // where values match params`
- Define values of props directly to variables using destructuring in the function parameter definition
    - `const Component = ({ var1, var2 }) => <do stuff>`
### State
- A component can be manually rerendered by calling the `render` method
- The `setInterval()` global function calls a function with a fixed time delay between calls 
    - These are not optimal ways to rerender components
- State can be added using React's *state hook*
    - `import { useState } from 'react'; const [ counter, setCounter ] = useState(0)`
    - *useState* returns the state counter and a function to modify the state
- When the state modifying function is called, React rerenders the component automatically
### Event handling
- Many events are tracked by the browser and are useful to handle
    - `<button onClick={handleClick}>btn</button>`
    - Whenever the onClick event occurs, the handleClick function is invoked
- Event handlers must be a function or function reference, not a simple variable
### Passing state - to child components
- TIP: Write small and reusable React components
- BEST PRACTICE: *Lift the state up* in the component hierarchy
    - Closest common ancestor
    - Pass the state through props
- BEST PRACTICE: Use *onSomething* names for props which take functions which handle events and *handleSomething* for the actual function definition which handles the event
- Changes in state cause rerendering 
## d A more complex state, debugging React apps
- State complexity increasese with multiple state variables
- Variables can be combined into a *single state object*
    - Access the different state values with dot notation
- When using an object of state variables, you can leave the others the same using the *object spread* syntax
    - `...objs, obj: newVal`
    - Creates a new object which copies all properties of the previous object, but overwrites whatever comes after the spread
    - Otherwise, you must explicitly set the other values to themselves
    - `objUntouched: objUntouched, obj: newVal`
- NOTE: *It is forbidden in React to mutate state directly*
- Unless you have complex state, it is often best to leave as separate pieces of state
- TIP: When using an array as state, use the concat method as to not mutate the state itself, rather returning a new array
- WARNING: State is updated asynchronously, i.e. changes "at some point" before the component is rendered again
    - Fix values within functions not updating consistently by saving to a new variable
    - `const updatedState = oldState + 1; setState(updatedState); console.log(updatedState)`
### Conditional rendering
- Return different JSX depending on conditions
    - Can handle with *if statements*
### Old React
- Components wanting to use state had to be defined as class components
- Hooks are used exclusively utilized as they simplify development considerably
### Debugging
- Leave the console window open at all times!!!
- Fix the problem immediately, do not develop more code until rectified
- Utilize print-based debugging into the console
- Write *debugger* anywhere in the code within the *Sources* tab of the developer tools to create a breakpoint
- React developer tools adds a *Components* tab
    - Keeps track of props, hooks, etc.
### Rules of Hooks
- Do not call *useState* or *useEffect* wthin a loop, a conditional expression, or any place that is not a function defining a component
    - Hooks must always be called in the same order
- WARNING: Watch out for infinite recursion from rerendering
### A function that returns a function
- Event handler can be a function returning a function
- When React renders the *outer* function, it assigns the return value of it to the onSomething attribute
- Use this to define generic functionality that can be customized with parameters
    - Similar to a *factory pattern*
    - `setToValue = (newValue) => () => { <do stuff with newValue> }`
### Never define a component within another component
- Very common to lead to unpleasant problems
- React treats a component inside another component as a new component in every render
    - Impossible for React to optimize the component
### Web programmers oath
- Programming is hard, this is why I will use all the possible means to make it easier:
    - I will have my browser developer console open all the time
    - I progress with small steps
    - I will write lots of *console.log* statements to make sure I understand the code
    - If my code does not work, I will not write more code. I will fix the code or return to a state when everything was still working
    - I will formulate my questions to others properly

