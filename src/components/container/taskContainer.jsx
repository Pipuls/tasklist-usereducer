import React, { useReducer, useContext } from 'react';
import TaskList from '../pure/taskList';
import TaskForm from '../forms/taskForms';


export const myContext = React.createContext(null);
export const dispatchActions = React.createContext(null);

export function TaskDispatchContext() {
    return useContext(dispatchActions);
}

let initialState = [];
let initialFilterState = 'SHOW_ALL';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';


const filterTask = (tasks, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return SHOW_ALL

        case SHOW_ACTIVE:
            return SHOW_ACTIVE

        case SHOW_COMPLETED:
            return SHOW_COMPLETED

        default:
            return tasks;
    }
}

const filterReducer = (filterstate, action) => {

    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return filterTask(filterstate, action.payload.filter);
        default:
            return filterstate;
    }

}

const TaskReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {

                    id: state.length,
                    completed: false,
                    name: action.payload.name,
                    description: action.payload.description
                }
            ]

        case DELETE_TASK:
            return state.filter((state, index) => index !== action.index);


        case TOGGLE_COMPLETE:
            return state.map((task, index) => (task.id === action.payload.id) ? {
                ...task,
                completed: !task.completed
            } : task)


        case SET_VISIBILITY_FILTER:
            return filterTask(state, action.payload.filter)


        default:
            return state;
    }

}

const TaskContainer = () => {
    const [state, dispatch] = useReducer(TaskReducer, initialState);
    const [filterstate, filterdispatch] = useReducer(filterReducer, initialFilterState);


        return (
            <myContext.Provider value={{state, filterstate}}>
                <dispatchActions.Provider value={{dispatch, filterdispatch}}>
                    <div>
                        <div>
                            <TaskList></TaskList>
                        </div>
                        <div>
                            <TaskForm></TaskForm>
                        </div>
                    </div>
                </dispatchActions.Provider>
            </myContext.Provider>
        );
    }


export default TaskContainer;
