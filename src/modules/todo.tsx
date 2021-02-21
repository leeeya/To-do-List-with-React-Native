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

// export const deletePerson = createAsyncThunk(
//   'todo/deleteTodo',
//   async (id: string, { rejectWithValue }) => {
//     try {
//       await api.deletePerson(id);

//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

// const reducers = {
//   initTodo: (state: initialTodo) => {
//     state.isLoading = true;
//   },
//   initTodoSuccess: (state: initialTodo, action: PayloadAction<TodoItem[]>) => {
//     state.isLoading = false;
//     state.todoList = action.payload;
//   },
//   initTodoFailure: (
//     state: initialTodo,
//     action: PayloadAction<null | Error>,
//   ) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },
//   addTodo: (state: initialTodo) => {
//     state.isLoading = true;
//   },
//   addTodoSuccess: (state: initialTodo, action: PayloadAction<TodoItem>) => {
//     state.isLoading = false;
//     state.todoList = [...state.todoList, action.payload];
//   },
//   addTodoFailure: (state: initialTodo, action: PayloadAction<null | Error>) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },
//   removeTodo: (state: initialTodo) => {
//     state.isLoading = true;
//   },
//   removeTodoSuccess: (state: initialTodo, { payload }: any) => {
//     state.isLoading = false;
//     state.todoList = payload;
//   },
//   removeTodoFailure: (state: initialTodo, { payload }: any) => {
//     state.isLoading = false;
//     state.error = payload;
//   },
// };

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
  },
});

export default todoSlice.reducer;
