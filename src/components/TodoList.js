// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
import Button from '@material-ui/core/Button';



const TodoList = (props) => {
     return (
          <div className='todoList'>
               
               {props.todo.map(listItem => {
                    return (
                         
                    <Todo key={listItem.id} listItem={listItem} toggleTodo={props.toggleTodo}/>
                    
                  
                    
                    )
               })}

               <Button onClick={props.clearCompleted}
                variant="contained" 
                color="secondary">
                    Clear Completed Tasks
               </Button>
          </div>
      )
}


export default TodoList