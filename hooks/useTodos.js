import React, { useEffect, useReducer } from 'react'
import { reducer } from '../08-useReducer/reducer'

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || []
}

export const useTodos = (initialState = []) => {
    const [todos, dispatch] = useReducer(reducer, initialState, init)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const handleModifyTodo = (todoID) => {
        const action = {
            type: "MODIFY",
            payload: todoID
        }
        dispatch(action)

    }
    const handleAddTodo = (newTodo) => {
        const action = {
            type: "ADD",
            payload: newTodo
        }
        dispatch(action)
    }
    const handleDeleteTodo = (todoID) => {
        const action = {
            type: "DELETE",
            payload: todoID
        }
        dispatch(action)
    }
    return {
        todos,
        handleModifyTodo,
        handleAddTodo,
        handleDeleteTodo,
        todosCount:todos.length,
        pendingTodos:todos.filter(todo=>!todo.done).length
    }
}
