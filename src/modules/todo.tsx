import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as api from '../api';
import { InitialTodo, TodoItem } from '../types';
import { THUNK_TYPE, STATE, NAME, MESSAGE } from '../constant';

const initialState: InitialTodo = {
  loading: STATE.IDLE,
  todoList: [],
  error: null,
};

export const getTodoList = createAsyncThunk(
  THUNK_TYPE.GET_TODO_LIST,
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
  THUNK_TYPE.ADD_TODO,
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
  THUNK_TYPE.DELETE_TODO,
  async (id: number, { rejectWithValue }) => {
    try {
      const updatedTodoList = await api.deleteTodo(id);

      return updatedTodoList;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updateTodo = createAsyncThunk(
  THUNK_TYPE.UPDATE_TODO,
  async (id: number, { rejectWithValue }) => {
    try {
      const updatedTodoList = await api.updateTodo(id);

      return updatedTodoList;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const todoSlice = createSlice({
  name: NAME.TODO,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getTodoList.fulfilled,
      (state, { payload }: PayloadAction<TodoItem[]>) => {
        state.loading = STATE.IDLE;
        state.todoList = payload;
      },
    );
    builder.addCase(getTodoList.rejected, (state) => {
      state.loading = STATE.IDLE;
      state.error = new Error(MESSAGE.CAN_NOT_GET_TODO);
    });
    builder.addCase(
      addTodo.fulfilled,
      (state, { payload }: PayloadAction<TodoItem>) => {
        state.loading = STATE.IDLE;
        state.todoList.push(payload);
      },
    );
    builder.addCase(addTodo.rejected, (state) => {
      state.loading = STATE.IDLE;
      state.error = new Error(MESSAGE.CAN_NOT_ADD_TODO);
    });
    builder.addCase(
      deleteTodo.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.loading = STATE.IDLE;
        state.todoList = payload;
      },
    );
    builder.addCase(deleteTodo.rejected, (state) => {
      state.loading = STATE.IDLE;
      state.error = new Error(MESSAGE.CAN_NOT_DELETE_TODO);
    });
    builder.addCase(
      updateTodo.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.loading = STATE.IDLE;
        state.todoList = payload;
      },
    );
    builder.addCase(updateTodo.rejected, (state) => {
      state.loading = STATE.IDLE;
      state.error = new Error(MESSAGE.CAN_NOT_UPDATE_TODO);
    });
    builder.addMatcher(
      (action) => action.type.endsWith('/pending'),
      (state) => {
        if (state.loading === STATE.IDLE) {
          state.loading = STATE.PENDING;
        }
      },
    );
  },
});

export default todoSlice.reducer;
