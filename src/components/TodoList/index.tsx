import React, { FC, useRef } from 'react';
import { FlatList } from 'react-native';
import TodoItem from '../TodoItem';
import { TodoListProps } from '../../types';

const TodoList: FC<TodoListProps> = ({ items }) => {
  const todoList = useRef<any>(null);

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <TodoItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      ref={todoList}
      onContentSizeChange={() => todoList.current.scrollToEnd()}
    />
  );
};

export default TodoList;
