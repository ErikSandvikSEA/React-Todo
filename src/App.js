import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './Todo.css'

import Grid from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todo: todo //can also just be todo, since they are both the same
    }
  }


  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todo: [...this.state.todo, newTodo]
    })
  }

  toggleTodo = clickedId => {
    const newTodoList = this.state.todo.map(listItem => {
      if(listItem.id === clickedId){
        return {
          ...listItem,
          completed: !listItem.completed
        }
      } else {
        return listItem
      }
    })

    this.setState({
      todo: newTodoList
    })
  }

  clearCompleted = () => {
    const partialList = this.state.todo.filter(listItem => {
     return listItem.completed === false
      }
    )
    this.setState({
      todo: partialList
    })
  }


  render() {
    return (
      <Grid container='true'>
        <div className='header'>
        <h2>Productivity App</h2>
        </div>
        <Box
        boxShadow={3}
        >
        <TodoForm addTodo={this.addTodo}/>
        <TodoList 
          todo={this.state.todo}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        
        />
        </Box>
      </Grid>

    );
  }
}

export default App;
