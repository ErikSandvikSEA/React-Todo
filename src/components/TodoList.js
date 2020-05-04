// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
     return (
          <div className='todoList'>
               {props.todo.map(listItem => {
                    return (
                    <Todo key={listItem.id} listItem={listItem} />
                    )
               })}
               <button>
                    Reset List
               </button>
          </div>
      )
}


export default TodoList