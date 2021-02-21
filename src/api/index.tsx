import AsyncStorage from '@react-native-async-storage/async-storage';

import { TodoItem } from '../types';

export const setTodo = async (todo: TodoItem) => {
  try {
    const prevData = await AsyncStorage.getItem('todoList');

    if (prevData) {
      const prevTodoList = JSON.parse(prevData);
      const currentTodoList = JSON.stringify([...prevTodoList, todo]);

      await AsyncStorage.setItem('todoList', currentTodoList);
    } else {
      await AsyncStorage.setItem('todoList', JSON.stringify([todo]));
    }
  } catch (error) {
    const asyncStorageKeys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(asyncStorageKeys);
    console.error(error);
  }

  return todo;
};

export const getTodoList = async () => {
  try {
    const data = await AsyncStorage.getItem('todoList');
    if (data) {
      const todoList = JSON.parse(data);

      return todoList;
    } else {
      return [];
    }
  } catch (error) {
    const asyncStorageKeys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(asyncStorageKeys);
    console.error(error);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const prevData = await AsyncStorage.getItem('todoList');

    if (prevData) {
      const prevTodoList = JSON.parse(prevData);
      const currentTodoList = JSON.stringify(
        prevTodoList.filter((todo: TodoItem) => todo.id !== id),
      );

      await AsyncStorage.setItem('todoList', currentTodoList);

      return id;
    } else {
      return Error('not exisit todo');
    }
  } catch (error) {
    const asyncStorageKeys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(asyncStorageKeys);
    console.error(error);
  }
};

export const updateTodo = async (id: number) => {
  try {
    const prevData = await AsyncStorage.getItem('todoList');

    if (prevData) {
      const prevTodoList = JSON.parse(prevData);
      const currentTodoList = JSON.stringify(
        prevTodoList.map((todo: TodoItem) => {
          if (todo.id === id) {
            return { id: id, todo: todo.todo, done: !todo.done };
          } else {
            return todo;
          }
        }),
      );

      await AsyncStorage.setItem('todoList', currentTodoList);

      return JSON.parse(currentTodoList);
    } else {
      return Error('not exisit todo');
    }
  } catch (error) {
    const asyncStorageKeys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(asyncStorageKeys);
    console.error(error);
  }
};
