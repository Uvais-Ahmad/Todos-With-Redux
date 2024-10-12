import { type } from "@testing-library/user-event/dist/type";

// Purpose: Define the action types for the todos.
const ADD_TODO='ADD TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

const addTodo = (text ) => {
    return {
        type: ADD_TODO,
        payload : {
            text
        }
    }
}

const toggleTodo = (index) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            index
        }
    }
}

export { ADD_TODO, TOGGLE_TODO, addTodo, toggleTodo };