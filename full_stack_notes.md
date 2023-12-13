# ABOUT
This document consists of notes I took while completing Full Stack open. These notes are not based off of the course material but were further research I conducted while going through the course.

## Challenges when solving problems
- Handling multiple state variables between multiple components

## JavaScript
- Features
    - Dynamic
    - Just in Time (JIT) compiled
    - Async event loop
- Quirks
    - Pass by value, unless reference type like object
- Global object
    - The window object in the browser
- Async programming
    - Callback functions are only called when the related event takes place
    - Callback Hell: The phenomenom of heavily nested code due to callbacks
        - Solution = Promises
    - Promises: Returned by a function, stating they will be fulfilled in the future
    - Promises can be awaited when within an async function
        - Newer versions allow top-level await
- Arrow functions
    - Anonymous functions with simpler syntax
    - Since they do not have their own `this`, they will not use the global object
    - Pros
    - Cons
## React
- Components
- Hooks
    - useState
    - useEffect
## Node.js
- JavaScript runtime for the server-side

## TypeScript

## DOM
- Document Object Model
- Shadow DOM