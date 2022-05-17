import React, { ChangeEvent } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectPassword, selectUsername } from './loginSlice';
import { setUsername, setPassword } from './loginSlice';
import styles from  './Login.module.scss';

export const Login = () => {
    const username = useAppSelector(selectUsername)
    const password = useAppSelector(selectPassword)
    const dispatch = useAppDispatch()

    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setUsername(e.target.value))} value={username} id="filled-basic" label="username" variant="filled" />
                <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setPassword(e.target.value))} value={password} id="filled-basic" label="password" variant="filled" type='password' />
                <Button variant="contained">Login</Button>
            </div>
        </div>
    )
}