import { ADD_TODO, TOGGLE_TODO } from "../actions/todosActions"

const initialState = {
    todos : [{
        text : "Indian Gas Agency ",
        isCompleted : false
    }, {
        text : "Zila Parishad Tablets",
        isCompleted : false
    }]
}
export const todoReducer = (currentState = initialState, action) => {
    switch(action.type) {
        case ADD_TODO: {
            return {
                todos: [
                    ...currentState.todos,
                    {
                        text : action.payload.text,
                        isCompleted : false
                    }
                ]
            }
        }
        case TOGGLE_TODO: {
            return {
                
                todos: currentState.todos.map((todo, index) => {
                    if(index === action.payload.index) {
                        return {
                            ...todo,
                            isCompleted : !todo.isCompleted
                        }
                    }
                    return todo
                })
            }
        }
        default: {
            return currentState
        }
    }
}