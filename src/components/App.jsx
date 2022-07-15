import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItem] = useState([]); //start out with empty array

  function handleChange(e) {
    const newValue = e.target.value;
    setInput(newValue);
  }
  function saveItem() {
    setItem((prevItem) => {
      return [...items, input];
    });
    setInput("");
  }

  console.log(items);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={input} />
        <button onClick={saveItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
