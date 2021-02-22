import React, { FC } from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../modules/todo';
import { TodoItemProps } from '../../types';
import { TITLE } from '../../constant';

const TodoItem: FC<TodoItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const deleteButtonHandler = () => {
    dispatch(deleteTodo(item.id));
  };
  const disableHandler = () => {
    dispatch(updateTodo(item.id));
  };

  return (
    <View style={styles.todoItemWrapper}>
      <TouchableOpacity
        style={styles.todoTitleWrapper}
        onPress={disableHandler}>
        <Text style={item.done ? styles.done : styles.todoTitle}>
          {`🗂  ${item.todo}`}
        </Text>
      </TouchableOpacity>
      <View style={styles.deleteButton}>
        <Button title={TITLE.DELETE} onPress={deleteButtonHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItemWrapper: {
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    borderColor: 'gray',
  },
  todoTitleWrapper: {
    flex: 1,
    width: '80%',
  },
  todoTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  deleteButton: {
    width: '20%',
  },
  done: {
    width: '80%',
    fontSize: 20,
    fontWeight: '600',
    textDecorationLine: 'line-through',
  },
});

export default TodoItem;
