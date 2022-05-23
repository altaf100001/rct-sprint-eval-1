import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced


  const [count,setCount] = React.useState(1)
  // NOTE: do not delete `data-cy` key value pair

const increcount = ()=>
{
  setCount(prev => prev+1)
}


const decrecount = ()=>
{
  if (count>0)
  setCount(prev => prev-1)
}




  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button"  onClick={increcount}><i class="fa-solid fa-plus"></i></button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={decrecount} ><i class="fa-solid fa-minus"></i></button>
    </div>
  );
};

export default Counter;
