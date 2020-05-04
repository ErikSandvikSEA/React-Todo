import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';



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
               <Box
               display='flex'
               flexDirection='column'
               alignItems='center' className='todoForm'>
                    <form
                         onSubmit={this.submitForm}
                    >
                         <TextField
                         onSubmit={this.submitForm}
                              variant='outlined' 
                              type='text'
                              name='props.task'
                              value={this.state.taskInput}
                              placeholder='Enter a New Task'
                              onChange={this.handleChange}

                         />
                         <Button
                         onClick={this.submitForm}
                         variant="contained" 
                         color="primary"
                         size='large'
                         >
                              Add to Your List
                         </Button>
                    </form>
               </Box>
          )
     }



}


export default TodoForm