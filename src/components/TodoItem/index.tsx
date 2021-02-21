import React, { FC } from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { TodoItemProps } from '../../types';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../modules/todo';

const TodoItem: FC<TodoItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const deleteButtonHandler = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <TouchableOpacity style={true ? styles.disable : styles.todoItemWrapper}>
      <Text style={true ? styles.done : styles.todoTitle}>{item.todo}</Text>
      <View style={styles.deleteButton}>
        <Button title={'삭제'} onPress={() => deleteButtonHandler(item.id)} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  todoTitle: {
    width: '80%',
    fontSize: 20,
    fontWeight: '600',
  },
  deleteButton: {
    width: '20%',
  },
  disable: {
    width: '80%',
    fontSize: 20,
    fontWeight: '600',
    backgroundColor: 'gray',
  },
  done: {
    width: '80%',
    fontSize: 20,
    fontWeight: '600',
    textDecorationLine: 'line-through',
  },
});

export default TodoItem;
