import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TodoItem } from '../types';
import { TITLE, MESSAGE, NAME } from '../constant';

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
    Alert.alert(TITLE.ERROR, MESSAGE.CAN_NOT_ADD_TODO, [{ text: NAME.OK }], {
      cancelable: false,
    });
    console.error(error);
  }

  return todo;
};

export const getTodoList = async () => {
  try {
    const data = await AsyncStorage.getItem('todoList');
    if (!data) return [];

    const todoList = JSON.parse(data);

    return todoList;
  } catch (error) {
    Alert.alert(TITLE.ERROR, MESSAGE.CAN_NOT_GET_TODO, [{ text: NAME.OK }], {
      cancelable: false,
    });
    console.error(error);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const prevData = await AsyncStorage.getItem('todoList');
    if (!prevData) throw new Error(MESSAGE.NOT_EXISIT_TODO);

    const prevTodoList = JSON.parse(prevData);
    const currentTodoList = JSON.stringify(
      prevTodoList.filter((todo: TodoItem) => todo.id !== id),
    );

    await AsyncStorage.setItem('todoList', currentTodoList);

    return JSON.parse(currentTodoList);
  } catch (error) {
    Alert.alert(TITLE.ERROR, MESSAGE.CAN_NOT_DELETE_TODO, [{ text: NAME.OK }], {
      cancelable: false,
    });
    console.error(error);
  }
};

export const updateTodo = async (id: number) => {
  try {
    const prevData = await AsyncStorage.getItem('todoList');
    if (!prevData) throw new Error(MESSAGE.NOT_EXISIT_TODO);

    const prevTodoList = JSON.parse(prevData);
    const currentTodoList = JSON.stringify(
      prevTodoList.map((todo: TodoItem) => {
        if (todo.id !== id) {
          return todo;
        }
        return { id: id, todo: todo.todo, done: !todo.done };
      }),
    );

    await AsyncStorage.setItem('todoList', currentTodoList);

    return JSON.parse(currentTodoList);
  } catch (error) {
    Alert.alert(TITLE.ERROR, MESSAGE.CAN_NOT_UPDATE_TODO, [{ text: NAME.OK }], {
      cancelable: false,
    });
    console.error(error);
  }
};
