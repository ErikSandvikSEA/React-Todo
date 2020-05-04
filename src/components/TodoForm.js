import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


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
               // () => console.log(this.state.taskInput)
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
                         <TextField
                              id='outlined-basic'
                              variant='outlined' 
                              type='text'
                              name='props.task'
                              value={this.state.taskInput}
                              placeholder='Enter a New Task'
                              onChange={this.handleChange}

                         />
                         <Button
                         variant="contained" 
                         color="primary"
                         >
                              Add to Your List
                         </Button>
                    </form>
               </div>
          )
     }



}


export default TodoForm