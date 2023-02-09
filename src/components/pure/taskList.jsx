import React, { useContext } from 'react';
import { DELETE_TASK, dispatchActions, myContext, SET_VISIBILITY_FILTER } from '../container/taskContainer';
import Task from './tasks';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const TaskList = () => {

    const { state, filterstate } = useContext(myContext);
    const { dispatch, filterdispatch } = useContext(dispatchActions);


    return (
        <Card className='bg-dark mb-3'>
            <Card.Body>
            <Card.Title>
                    <h3 className=''>Your tasks:</h3>
                </Card.Title>
                <Card.Text>
                    <Button variant="warning"
                        onClick={() =>
                            filterdispatch({
                                type: SET_VISIBILITY_FILTER,
                                payload: {
                                    filter: 'SHOW_ACTIVE'
                                }
                            })
                        }>
                        In Progress</Button>

                    <Button variant="success"
                        onClick={() =>
                            filterdispatch({
                                type: SET_VISIBILITY_FILTER,
                                payload: {
                                    filter: 'SHOW_COMPLETED'
                                }
                            })
                        }>
                        Completed</Button>

                    <Button variant="primary"
                        onClick={() =>
                            filterdispatch({
                                type: SET_VISIBILITY_FILTER,
                                payload: {
                                    filter: 'SHOW_ALL'
                                }
                            })
                        }>
                        All</Button>
                </Card.Text>
                <ListGroup >
                    <ListGroup.Item className='list bg-secondary'>
                    {state.map((task, index) => {
                    if ((filterstate === 'SHOW_ALL') || (filterstate === 'SHOW_COMPLETED' && task.completed) || (filterstate === 'SHOW_ACTIVE' && !task.completed)) {
                        return (
                                <div className='d-flex gap-5 mb-3' key={index}>
                                <Task key={index} task={task} id={index} />
                                <Button className='btn btn-danger btn-sm mb-3' onClick={() => dispatch({type: DELETE_TASK, index})}>Delete</Button>
                                </div>
                                );
                    }
                        return null;
                    })}
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default TaskList;
