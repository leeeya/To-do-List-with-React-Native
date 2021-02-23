import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../src/components/TodoList';
import { FlatList } from 'react-native';

describe('TodoList', () => {
  const mockItems = [
    { id: 123456, todo: '청소하기', done: false },
    { id: 789013, todo: '학원가기', done: true },
  ];

  it('should renders todo list', () => {
    const wrapper = shallow(<TodoList items={mockItems} />);
    const todoList = wrapper.find(FlatList);

    expect(todoList.prop('data')).toEqual(mockItems);
  });
});
