1.createContext(), in context/UserContext
2.Provide Context, in context/UserContextProvider
3.Use Context in 'Profile' and 'Login', in component/login , component/profile 
4.Wrap the 'Profile' ans 'Login' with 'Provider',  in App

<++++++++++++++++++++++++++++++ by chatGPT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
The Context API in React is a built-in feature that allows you to share data (called context) between components without having to pass props manually through every level of the component tree.

In simpler words:
👉 It helps you avoid "prop drilling"—passing props through many layers of components just to reach a deeply nested child.

🔑 When to Use Context API?
When you have global data like:

User authentication info
Theme (dark/light mode)
Language preference
Cart items in an e-commerce app

🛠 How Context API Works? (Step-by-Step)
1️⃣ Create Context

import { createContext } from 'react';
const MyContext = createContext();

2️⃣ Provide Context (Wrap your component tree)

import React, { useState } from 'react';
export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [user, setUser] = useState('Aman');

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;

3️⃣ Use Context in Any Child Component

import React, { useContext } from 'react';
import { MyContext } from './MyProvider';  // Path where context is defined

const ChildComponent = () => {
  const { user, setUser } = useContext(MyContext);

  return (
    <div>
      <h1>Hello, {user}!</h1>
      <button onClick={() => setUser('Soni')}>Change Name</button>
    </div>
  );
};

export default ChildComponent;

4️⃣ Wrap the App with Provider

import React from 'react';
import ReactDOM from 'react-dom';
import MyProvider from './MyProvider';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyProvider>
    <App />
  </MyProvider>
);


<+++++++++++Key Hooks:+++++++++++>

createContext() → Creates the context object.
<Context.Provider> → Supplies the value.
useContext(ContextName) → Allows access to the value.