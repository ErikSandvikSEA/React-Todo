import React from "react";

const Todo = props => {
     const { listItem, toggleTodo } = props
     return (
          <div 
               onClick={() => toggleTodo(listItem.id)}
               className={`${listItem.completed ? 'completed' : ''}`}
          >
               <p>{listItem.task}</p>
          </div>
  );
};

export default Todo;