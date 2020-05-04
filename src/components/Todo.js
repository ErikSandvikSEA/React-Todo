import React from "react";

const Todo = props => {
     const { listItem } = props
     return (
          <div>
               <p>{listItem.task}</p>
          </div>
  );
};

export default Todo;