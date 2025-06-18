1.goes only App.jsx file

++++++++++++++++++++++++++++++ Hooks in React +++++++++++++++++++++++++++++++++++

Q- What is hooks in react js and why it is use?

Answer -

What Are Hooks in React?

Hooks are functions that allow you to use state and lifecycle features inside functional components without writing a class. They were introduced in React 16.8 to simplify state management and component logic.

Hooks let you use React features without needing class components!

Common Hooks in React useState – Manages state in a functional component. useEffect – Handles side effects (e.g., fetching data, updating the DOM). useContext – Provides global state management. useRef – References DOM elements and persists values between renders. useMemo – Optimizes performance by memoizing values. useCallback – Memoizes functions to avoid unnecessary re-renders.

Why Are Hooks Used? Hooks solve several problems that existed with class components:

1️. Manage State in Functional Components (useState) Before hooks, state could only be used in class components. Now, functional components can manage state using the useState hook. Example: State Management Without Hooks (Class Component)

import React, { Component } from "react";

class Counter extends Component { constructor(props) { super(props); this.state = { count: 0 }; }

increment = () => { this.setState({ count: this.state.count + 1 }); };

render() { return (

Count: {this.state.count}

Increment
); } }
export default Counter;

With Hooks (Functional Component) :--

import React, { useState } from "react";

function Counter() { const [count, setCount] = useState(0); // useState Hook

return (

Count: {count}

<button onClick={() => setCount(count + 1)}>Increment
); }
export default Counter;

++++++++++++++++++++++++++++++++++ Conclusion +++++++++++++++++++++++++++++++++++++

Conclusion: Why Use Hooks? ✔ Hooks simplify state management with useState ✔ Hooks combine lifecycle methods into useEffect ✔ Hooks eliminate the need for this keyword ✔ Hooks improve code reusability with custom hooks ✔ Hooks optimize performance using useMemo and useCallback ✔ Hooks make functional components more powerful and maintainable

