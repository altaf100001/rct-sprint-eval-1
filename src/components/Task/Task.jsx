import React from "react";
import styles from "./task.module.css";

import Counter from "../Counter/Counter";

const Task = ({todo,onDelete}) => {
  // NOTE: do not delete `data-cy` key value pair

  const [check,setcheck] = React.useState(todo.done)
 

  return (
    <li data-cy="task" className={styles.task}>

      <input type="checkbox" data-cy="task-checkbox" onChange={(e) => setcheck(e.target.checked)}/>
      <div data-cy="task-text" className={check?styles.striked:""}>{todo.text}</div>
      {/* Counter here */}
      <button data-cy="task-remove-button" onClick={() => onDelete(todo.id)}>Delete</button>

      <Counter/>
    </li>
  );
};

export default Task;
