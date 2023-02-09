import React, {useRef, useContext} from 'react';
import { ADD_TASK, DELETE_TASK, myContext, RESET, TaskContext, TaskDispatchContext, TaskSubmit, TOGGLE_COMPLETE } from '../container/taskContainer';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const TaskForm = () => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');

    const {dispatch} = TaskDispatchContext();

    
    const submit = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_TASK,
            payload: {
                name: nameRef.current.value,
                description: descriptionRef.current.value
            }
        })

        nameRef.current.value = '';
        descriptionRef.current.value = '';
    }

    return (
        <Card className='bg-dark p-5'>
                <form onSubmit={submit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Task name:</Form.Label>
                            <Form.Control 
                            type='text'
                            placeholder='Task Name'
                            ref={nameRef}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label>Task description:</Form.Label>
                        <Form.Control  
                        type='text'
                        placeholder='description'
                        ref={descriptionRef}/>
                    </Form.Group>
                    <Button variant="success" type='submit' >Create Task</Button>
                        </form>
        </Card>
    );
}

export default TaskForm;