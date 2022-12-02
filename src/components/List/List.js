import React, { useEffect, useState } from "react";
import TodoItem from "../Todo/Todo";

function List(props) {
  const [count, setCount] = useState(0);

  const countChecked = () => {
    var a = document.forms["main"];
    var x = a.querySelectorAll('input[type="checkbox"]:checked');
    setCount(x.length);
  };
  const clearCompleted = (e) => {
    e.preventDefault();
    var boxes = document.getElementsByClassName("chk");
    var texts = document.getElementsByClassName("txt");

    for (var i = 0; i < boxes.length; i++) {
      var box = boxes[i];
      console.log(box);
      var txt = texts[i];

      if (box.checked) {
        box.parentNode.removeChild(box);
        txt.parentNode.removeChild(txt);

        countChecked();
      }
    }
  };
  return (
    <form onChange={countChecked} name="main">
      <ul>
        {props.todos.map((todo) => {
          return (
            <li className="item" key={todo.id}>
              <input className="chk" id={todo.id} type="checkbox"></input>
              <label className="txt strikethrough" htmlFor={todo.id}>
                {" "}
                <TodoItem {...todo} key={todo.id} />
              </label>
            </li>
          );
        })}
      </ul>
      <hr></hr>
      <div className="flex">
        <div className="secondary-text">{count} items selected</div>
        <div>
          <button className="secondary-button" onClick={clearCompleted}>
            Clear Completed Tasks
          </button>
        </div>
      </div>
    </form>
  );
}

export default List;
