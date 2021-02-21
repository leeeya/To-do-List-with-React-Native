import React, { FC, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { TodoItem } from '../../types';
import { ToDoFormProps } from '../../types';

const ToDoForm: FC<ToDoFormProps> = ({ onSubmit }) => {
  const [todoItem, setTodoItem] = useState<TodoItem>({
    key: Date.now(),
    todo: '',
  });

  const todoFormInputHandler = (todo: string) => {
    setTodoItem({
      key: Date.now(),
      todo,
    });
  };

  const todoFormButtonHandler = () => {
    onSubmit(todoItem);
  };

  return (
    <View>
      <View>
        <TextInput
          style={styles.todoInput}
          editable
          placeholder={'Enter your todo!'}
          value={todoItem.todo}
          onChangeText={todoFormInputHandler}
        />
        <Button title={'ADD'} onPress={todoFormButtonHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toDoFormWrapper: {
    flex: 0.3,
  },
  todoInput: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
});

export default ToDoForm;
