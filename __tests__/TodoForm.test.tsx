import React from 'react';
import { shallow } from 'enzyme';
import TodoForm from '../src/components/TodoForm';
import { TextInput, Button } from 'react-native';

describe('<TodoForm />', () => {
  it('should work TodoForm', () => {
    const onSubmit = jest.fn();
    const wrapper = shallow(<TodoForm onSubmit={onSubmit} />);
    const input = wrapper.find(TextInput);
    const formButton = wrapper.find(Button);
    const value = input.prop('value');

    expect(value).toEqual('');

    formButton.simulate('press');

    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
});
