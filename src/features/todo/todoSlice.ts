import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface todoState {
  todos: todo[];
  currentTodo: string;
  status: 'idle' | 'loading' | 'failed';
}

export interface todo{
    title: string;
    checked: boolean;
    id: string;
}

const initialState: todoState = {
  todos: [],
  currentTodo: '',
  status: 'idle'
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
        if (action.payload.length === 0) return;
        const todo: todo = {
            title: action.payload,
            checked: false,
            id: nanoid(),
        }
      state.todos = [todo, ...state.todos];
    },
    checkTodo: (state, action: PayloadAction<string>) => {
        state.todos = state.todos.map(todo => {
            if (todo.id == action.payload) {
                if (todo.checked) return {
                    ...todo,
                    checked: false
                }
                return {
                    ...todo,
                    checked: true
                }
            }
            return todo
        })
    }
  },
});

export const { addTodo, checkTodo } = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todo.todos;

export default todoSlice.reducer;
