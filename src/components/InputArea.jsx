import React, { useState } from "react";

function InputArea(props) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    const newValue = e.target.value;
    setInput(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={input} />
      <button
        onClick={() => {
          //pass over to App
          props.onAdd(input);
          setInput("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

////This also work
// function InputArea(props) {
//   return (
//     <div className="form">
//       <input
//         onChange={props.inputChange}
//         type="text"
//         value={props.inputValue}
//       />
//       <button onClick={props.clickBtn}>
//         <span>Add</span>
//       </button>
//     </div>
//   );
// }

export default InputArea;
