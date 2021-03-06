import React, { FC, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ToDoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { addTodo, getTodoList } from './modules/todo';
import { RootState } from './modules/rootReducer';
import { TodoItem } from './types';

const App: FC = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todo.todoList);

  useEffect(() => {
    dispatch(getTodoList());
  }, [dispatch]);

  const todoFormSubmitHandler = (todo: TodoItem) => {
    dispatch(addTodo(todo));
  };

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.title}>나의 할 일 목록🗓</Text>
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
    color: '#28527a',
    fontSize: 24,
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
