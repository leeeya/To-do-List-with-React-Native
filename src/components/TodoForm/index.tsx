import React, { FC, useState } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  Alert,
} from 'react-native';
import { ToDoFormProps, TodoItem } from '../../types';
import { TITLE, MESSAGE, NAME } from '../../constant';

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
      return Alert.alert(TITLE.NOTICE, MESSAGE.ENTER_YOUR_TODO, [
        { text: NAME.OK },
      ]);
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
        placeholder={MESSAGE.ENTER_YOUR_TODO}
        value={todoItem.todo}
        onSubmitEditing={todoFormSubmitHandler}
        onChangeText={todoFormInputHandler}
      />
      <Button title={TITLE.ADD} onPress={todoFormSubmitHandler} />
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
