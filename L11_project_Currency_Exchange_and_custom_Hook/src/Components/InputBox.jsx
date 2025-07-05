import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyCange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable=false,
    currencyDisable=false,
    className = "",
}) {
   
    const amountInputId=useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor='amountInputId' className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChnage={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    disabled={currencyDisable}
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyCange && onCurrencyCange(e.target.value)}

                >
                    {currencyOptions.map((currency)=>(
                         <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                       
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

// <---------------------------Notes----------------------------------->
// 🧠 What is useId() in React?
// useId() is a React Hook that gives you a unique ID string.
// It’s used when you need a stable ID for accessibility or DOM purposes — like linking a <label> to an <input>.

// 📦 Why do we need useId()?
// Sometimes, you need a unique id in your component. For example:

// jsx
// Copy
// Edit
// <label htmlFor="name">Name</label>
// <input id="name" />
// But if you reuse the same component multiple times, hardcoding "name" causes duplicate IDs — which breaks accessibility!

// So, React gives you:

// jsx
// Copy
// Edit
// const id = useId();
// Which creates a unique and stable ID even across server and client (important for SSR).

// ✅ Example
// jsx
// Copy
// Edit
// import { useId } from 'react';

// function NameInput() {
//   const id = useId(); // generates a unique id like: react-123:abc

//   return (
//     <div>
//       <label htmlFor={id}>Name</label>
//       <input id={id} type="text" />
//     </div>
//   );
// }
// Now if you use <NameInput /> multiple times, each will get a different ID!

// 🔑 Key Points
// Feature	Explanation
// 🆔 Unique ID	Each call to useId() returns a unique ID
// 🔁 Stable	Same ID across re-renders
// 🤝 Helpful for	Accessibility (htmlFor, aria-*)
// 🌐 SSR-friendly	Avoids mismatch between server/client

// 🛑 Don't use useId() for keys in lists
// Use map index or item ID for that. useId() is not meant for list keys.
