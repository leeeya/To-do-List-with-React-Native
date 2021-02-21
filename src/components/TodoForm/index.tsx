import React, { FC, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

interface ToDoFormProps {
  onSubmit: (todo: string) => void;
}

const ToDoForm: FC<ToDoFormProps> = ({ onSubmit }) => {
  const [todo, setTodo] = useState<string>('');

  const todoFormButtonHandler = () => {
    onSubmit(todo);
  };

  return (
    <View>
      <View>
        <TextInput
          style={styles.todoInput}
          editable
          placeholder={'Enter your todo!'}
          value={todo}
          onChangeText={setTodo}
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
