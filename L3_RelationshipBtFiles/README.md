<----------------In this lacture Learn about Relationships between files----------------->

1.When we create a function then function name should be start from Capital later (like: Ankit).

2. we can return only one html tag ,for returning more than one tag we use 'Fragment(<>)'
   Fragment ( or <> shorthand) is a special wrapper in React that allows grouping multiple elements without adding extra nodes to the DOM.

3.when we create new file try to make name start fron Capital later, like : Aman.jsx,  (this is not neccesary).
4.new cereate file extantion => .jsx (like: Aman.jsx, not allow Aman.js).
5.React create its oun DOM (ReactDOM) and 'createRoot()' is the method of ReactDOM
6.createRoot()=> create a HTML root, wher we passed Argument.
7.createRoot(document.getElementById('root'))=> here we passed argumant 'document.getElementById('root')'

8. createRoot(document.getElementById('root')).render(
    <App />
)
It tells React to render the <App /> component into the HTML page.
document.getElementById('root') is a div in your HTML file where React inserts your app.