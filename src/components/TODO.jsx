import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormControl } from '@mui/material/FormControl';
import "../scss/Todo.scss"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions, todoStore } from '../redux-store/store';



function TODO() {

  let {todoData} = useSelector((state=>state.todo))
  // console.log(todoData)
  // console.log(todoActions)
  let dispatchToDo = useDispatch()

  let textFieldRef = useRef()

  let getTask = ()=>{
    let taskValue = textFieldRef.current.querySelector('input').value
    dispatchToDo(todoActions.create(taskValue))
  }

  let updateTask = (i)=>{
    let newTaskValue = prompt("Enter the new task value:");
    if (newTaskValue) {
      dispatchToDo(todoActions.update({ i, newValue: newTaskValue }));
    }
  }

  let deleteTask = (i)=>{
      dispatchToDo(todoActions.delete( i));
  }

  let doneTask = (i)=>{
    dispatchToDo(todoActions.done(i));
}


  return (
    <>
      <Box id='box'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="ENTER YOUR TASK" variant="standard" ref={textFieldRef}
      sx={{
      }}

      />
      <Button variant="contained" color="success" onClick={getTask}> CREATE TASK </Button>
    </Box>
    <br />
    {todoData.map((e,i)=>{
      {console.log(e)}

    return <>
    <Stack id="stack" direction="row" spacing={2} key={i} >
      <div id="task">{e}</div>

      <div id="buttons">
      <Button variant="contained" color="secondary" onClick={() => updateTask(i)}>UPDATE</Button>
      <Button variant="contained" color="error" onClick={()=>deleteTask(i)}> DELETE </Button>
      <Button variant="contained" color="primary" onClick={()=>doneTask(i)}> DONE </Button>
      </div>
    </Stack>
    <br />
      </>
    })}

    </>
  )
}

export default TODO