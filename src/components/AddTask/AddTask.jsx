import React from "react";
import styles from "./addTask.module.css";
import {v4 as uuid} from "uuid"
import Tasks from "../Tasks/Tasks";




const AddTask = ({data}) => {

  const [inpval, selinpval ] = React.useState("")
  const [todos,settods] = React.useState(data)

  const handleinput = (e)=>{
    selinpval(e.target.value)
  }

  const handleadd =()=>{
    settods([
      ...todos,{
        "id": uuid(),
 
        "text": inpval,
        "done": false,
        "count": 2
      },
    ])
    selinpval("")
  } 

  const onDelete = (id) =>{
    let newtodos = todos.filter(todo => todo.id!=id)
    settods(newtodos)
  }


  
 
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" onChange={handleinput}/>

      <button data-cy="add-task-button" onClick={handleadd}><i class="fa-solid fa-plus"></i></button>
   
  <Tasks todo = {todos} onDelete={onDelete}/>

    </div>
  );
};

export default AddTask;
