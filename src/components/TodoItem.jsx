import React from "react";

function TodoItem(props) {
  //stateless component
  //cannot modify the props
  return (
    //pass in the function in props
    <div
      //this is not gonna be called untill the div got clicked
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default TodoItem;
