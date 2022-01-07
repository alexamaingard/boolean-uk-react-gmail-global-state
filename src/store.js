import React from 'react'
export const StoreContext = React.createContext();

export const EmailReducer = (state, action) => {
    
}

/*
export const todoReducer = (state, action) => {
    switch (action.type) {
      case 'addTodo':
        const addedState = [...state, action.payload]
        return addedState
      case 'updateTodo':
  const updatedState = state.map(todo => {
  if (todo.text === action.payload.text) {
  return action.payload
  } else {
  return todo
  }
  })
  return updatedState
      default:
  return state
    }
  }
*/