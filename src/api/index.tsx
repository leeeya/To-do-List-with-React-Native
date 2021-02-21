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
    AsyncStorage.clear();
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
    AsyncStorage.clear();
    console.error(error);
  }
};
