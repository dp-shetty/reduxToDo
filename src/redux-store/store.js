import { createSlice,configureStore } from "@reduxjs/toolkit";

let todoSlice = createSlice({
  name:"todo",
  initialState:{
    todoData:[]
  },
  reducers:{
    create : (state,action)=>{
      console.log(state,action)
      state.todoData.push(action.payload);
    },
    done:(state,action)=>{
      state.todoData[action.payload].done = !state.todoData[action.payload].done;
    },
    delete:(state,action)=>{
      state.todoData = state.todoData.filter((_, i) => i !== action.payload);
    },
    update:(state,action)=>{
      let { i, newValue } = action.payload;
      state.todoData[i] = newValue;
    }
  }
})

 export let todoStore = configureStore({
  reducer:{
    todo : todoSlice.reducer
  }
})

export let todoActions = todoSlice.actions