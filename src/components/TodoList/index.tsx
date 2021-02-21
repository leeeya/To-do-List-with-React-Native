import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { TodoListProps } from '../../types';
import TodoItem from '../TodoItem';

const TodoList: FC<TodoListProps> = ({ items }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <TodoItem item={item} />}
    />
  );
};

export default TodoList;
