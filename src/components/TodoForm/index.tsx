import React, { FC, useState } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  Alert,
} from 'react-native';
import { TodoItem } from '../../types';
import { ToDoFormProps } from '../../types';

const ToDoForm: FC<ToDoFormProps> = ({ onSubmit }) => {
  const [todoItem, setTodoItem] = useState<TodoItem>({
    id: Date.now(),
    todo: '',
    done: false,
  });

  const todoFormInputHandler = (todo: string) => {
    setTodoItem({
      id: Date.now(),
      todo,
      done: false,
    });
  };

  const todoFormSubmitHandler = () => {
    if (!todoItem.todo) {
      return Alert.alert(
        '알림',
        '할 일을 입력해주세요😆',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
    }
    onSubmit(todoItem);
    setTodoItem({
      id: Date.now(),
      todo: '',
      done: false,
    });
    Keyboard.dismiss();
  };

  return (
    <View style={styles.toDoFormWrapper}>
      <TextInput
        style={styles.todoInput}
        editable
        placeholder={'할 일을 입력해주세요✍️'}
        value={todoItem.todo}
        onSubmitEditing={todoFormSubmitHandler}
        onChangeText={todoFormInputHandler}
      />
      <Button title={'ADD'} onPress={todoFormSubmitHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  toDoFormWrapper: {
    flex: 0.3,
  },
  todoInput: {
    width: 240,
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
});

export default ToDoForm;
