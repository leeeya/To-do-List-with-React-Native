import React, { FC } from 'react';
import { View } from 'react-native';

interface TodoListProps {
  items: [];
}

const TodoList: FC<TodoListProps> = ({ items }) => {
  return <View>{items.map((item: string) => item)}</View>;
};

export default TodoList;
