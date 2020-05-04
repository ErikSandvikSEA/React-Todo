import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

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
    this.testState({
      todo: [this.state.todo, newTodo]
    })
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div className='header'>
        <h2>Productivity App</h2>
        <TodoForm />
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
