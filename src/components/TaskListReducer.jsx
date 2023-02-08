import React, { useReducer } from 'react';

const FIELD = 'FIELD';
const CREATE = 'CREATE';
const DELETE = 'DELETE';
const FILTER = 'FILTER';
const ERROR = 'ERROR';

const initialState = {
    taskName: '',
    taskDescription: '',
    taskCompleted: false,
    error: '',
    deleteTask: false,
    createTask: false,
    filterTask: false,
}

const taskReducer = (state, action) => {
    switch (action.type) {
        case FIELD:
            return {
                ...state,
                [action.fieldName]: action.payload
            }

        case CREATE:
            return {
                ...state,
                
            }
        case DELETE:
            return {
                ...state,
                
            }
        case FILTER:
            return {
                ...state,
                
            }
        case ERROR:
            return {
                ...state,
                
            }
        default:
            break;
    }
}
const TaskListReducer = () => {
    return (
        <div className='App'>
            <div>
                <h1>Task List</h1>
                
            </div>
        </div>
    );
}

export default TaskListReducer;
