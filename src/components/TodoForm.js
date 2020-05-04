import React from 'react'

class TodoForm extends React.Component {
     constructor() {
          super()
          this.state = {
               taskInput: '',
          }
     }

     handleChange = e => {
          this.setState(
               {
                    taskInput: e.target.value,
               },
               () => console.log(this.state.taskInput)
          )
     }

     submitForm = e => {
          e.preventDefault()
          this.props.addTodo(this.state.taskInput)
          this.setState({
               taskInput: '',
          })
     }

     render() {
          return (
               <div className='todoForm'>
                    <form
                         onSubmit={this.submitForm}
                    >
                         <input 
                              type='text'
                              name='props.task'
                              value={this.state.taskInput}
                              placeholder='Enter a New Task'
                              onChange={this.handleChange}

                         />
                         <button>
                              Add to Your List
                         </button>
                    </form>
               </div>
          )
     }



}


export default TodoForm