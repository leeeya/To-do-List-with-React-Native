import React, { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { TodoItemProps } from '../../types';

const TodoItem: FC<TodoItemProps> = ({ item }) => {
  const deleteButtonHandler = (id: number) => {
    console.log(id);
  };

  return (
    <View>
      <Text>{item.todo}</Text>
      <Button title={'delete'} onPress={() => deleteButtonHandler(item.key)} />
    </View>
  );
};

export default TodoItem;
