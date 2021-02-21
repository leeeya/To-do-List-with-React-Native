import React, { FC, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToDoForm from './components/TodoForm';

const App: FC = () => {
  const [todos, setAddTodo] = useState<string>('');
  console.log(todos);
  const todoFormSubmitHandler = (todo: string) => {
    console.log(todo);
    setAddTodo(todo);
  };

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.title}>Add your todo!</Text>
      </View>
      <View style={styles.TodoWrapper}>
        <ToDoForm onSubmit={todoFormSubmitHandler} />
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
    fontSize: 24,
    fontWeight: '600',
  },
  TodoWrapper: {
    flex: 0.7,
    justifyContent: 'flex-start',
  },
});

export default App;
