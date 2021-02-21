import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialTodo, TodoItem } from '../types';
import * as api from '../api';

const initialState: InitialTodo = {
  loading: 'idle',
  todoList: [],
  error: null,
};

export const getTodoList = createAsyncThunk(
  'todo/getTodoList',
  async (_, { rejectWithValue }) => {
    try {
      const todoList = await api.getTodoList();

      return todoList;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addTodo = createAsyncThunk(
  'todo/addTodo',
  async (todo: TodoItem, { rejectWithValue }) => {
    try {
      const addedTodo = await api.setTodo(todo);

      return addedTodo;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async (id: number, { rejectWithValue }) => {
    try {
      const deletedTodoId = await api.deleteTodo(id);

      return deletedTodoId;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodoList.pending, (state) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    });
    builder.addCase(
      getTodoList.fulfilled,
      (state, { payload }: PayloadAction<TodoItem[]>) => {
        state.loading = 'idle';
        state.todoList = payload;
      },
    );
    builder.addCase(getTodoList.rejected, (state) => {
      state.loading = 'idle';
      state.error = Error('get todo list failed');
    });
    builder.addCase(addTodo.pending, (state) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    });
    builder.addCase(
      addTodo.fulfilled,
      (state, { payload }: PayloadAction<TodoItem>) => {
        state.loading = 'idle';
        state.todoList.push(payload);
      },
    );
    builder.addCase(addTodo.rejected, (state) => {
      state.loading = 'idle';
      state.error = Error('add todo failed');
    });
    builder.addCase(deleteTodo.pending, (state) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    });
    builder.addCase(
      deleteTodo.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.loading = 'idle';
        state.todoList = state.todoList.filter((item) => item.id !== payload);
      },
    );
    builder.addCase(deleteTodo.rejected, (state) => {
      state.loading = 'idle';
      state.error = Error('add todo failed');
    });
  },
});

export default todoSlice.reducer;
