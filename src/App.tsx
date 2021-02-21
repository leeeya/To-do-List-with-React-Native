import React, { FC, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToDoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodoItem } from './types';

const App: FC = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const todoFormSubmitHandler = (todo: TodoItem) => {
    setTodoList((prev) => [...prev, todo]);
  };

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.title}>Add your todo!</Text>
      </View>
      <View style={styles.TodoFormWrapper}>
        <ToDoForm onSubmit={todoFormSubmitHandler} />
      </View>
      <View style={styles.TodoListWrapper}>
        <TodoList items={todoList} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e8f1f5',
  },
  header: {
    flex: 0.25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#007DFF',
    fontSize: 40,
    fontWeight: '600',
  },
  TodoFormWrapper: {
    flex: 0.15,
    justifyContent: 'flex-start',
  },
  TodoListWrapper: {
    width: '100%',
    flex: 0.6,
    backgroundColor: '#dae1e7',
  },
});

export default App;
