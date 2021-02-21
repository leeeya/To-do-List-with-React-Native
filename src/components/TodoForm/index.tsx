import React, { FC, useState } from 'react';
import { Button, StyleSheet, TextInput, View, Keyboard } from 'react-native';
import { TodoItem } from '../../types';
import { ToDoFormProps } from '../../types';

const ToDoForm: FC<ToDoFormProps> = ({ onSubmit }) => {
  const [todoItem, setTodoItem] = useState<TodoItem>({
    id: Date.now(),
    todo: '',
  });

  const todoFormInputHandler = (todo: string) => {
    setTodoItem({
      id: Date.now(),
      todo,
    });
  };

  const todoFormSubmitHandler = () => {
    onSubmit(todoItem);
    setTodoItem({
      id: Date.now(),
      todo: '',
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
