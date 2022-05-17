import React, { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import styles from './Todo.module.scss';
import { addTodo, selectTodos, todo, checkTodo } from './todoSlice';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useState } from 'react';


export const Todo = () => {
    const todos = useAppSelector(selectTodos)
    const [todo, setTodo] = useState('')
    const dispatch = useAppDispatch()

    const saveTodo = () => {
        dispatch(addTodo(todo))
        setTodo('')
    }

    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <TextField value={todo} onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)} id="filled-basic" label="Add Todo" variant="filled" />
                <Button onClick={saveTodo} variant="contained">Save</Button>
                {
                    todos.map((item: todo) => <TodoItem key={item.id} todo={item} />)
                }
            </div>
        </div>
    )
}

const TodoItem = (todo: any) => {
    const dispatch = useAppDispatch()

    return(
        <div className={styles.todoItem}>
            <Checkbox onClick={() => dispatch(checkTodo(todo.todo.id))} checked={todo.todo.checked} />
            <p>{todo.todo.title}</p>
        </div>
    )
}