import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  // const [input, setInput] = useState("");

  //This items array needed to access from App
  const [items, setItem] = useState([]); //start out with empty array

  // function handleChange(e) {
  //   const newValue = e.target.value;
  //   setInput(newValue);
  // }

  function saveItem(input) {
    setItem((prevItem) => {
      return [...items, input];
    });
    //setInput("");
  }

  function deleteItem(id) {
    setItem((prevItems) => {
      //loop thru the array
      return prevItems.filter((item, index) => {
        //return all but not the one with that id
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      {/* This also work */}
      {/* <InputArea
        inputChange={handleChange}
        inputValue={input}
        clickBtn={saveItem}
      /> */}
      <InputArea onAdd={saveItem} />
      <div>
        <ul>
          {items.map((item, index) => (
            <TodoItem
              //we can also use uuid to generate a unique id
              key={index}
              id={index}
              text={item}
              //pass in the function in props
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
