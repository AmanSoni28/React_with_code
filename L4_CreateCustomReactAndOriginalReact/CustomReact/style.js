// <--------------------how to react work with our code------------------------>

const reactElement={                              //when we return any HTML tag from App.jsx or other file, react convert HTML tag like taht(but not same)
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },                               
    children: "Click to visit google"
}


const root=document.querySelector("#root");      
customRender(reactElement,root);                         //this function append rectElement to root



function customRender(reactElement,root){                          
    const newElement= document.createElement(reactElement.type);
    newElement.innerHTML=reactElement.children;
    // newElement.setAttribute("href",reactElement.props.href);
    // newElement.setAttribute("target",reactElement.props.target);
    for (const key in reactElement.props) {                             //above 2 lines are also be currect but for set multiple attribute we use for..in loop
        newElement.setAttribute(key,reactElement.props[key])
    }
    root.appendChild(newElement);
}

// note: in vite, when we return any HTML tag, react convert HTML tag like 'reactElement' (but not same)
//and a function (like: customRender) is present create a new element and add all the properties and append it in root element