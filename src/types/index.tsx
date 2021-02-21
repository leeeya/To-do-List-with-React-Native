export interface TodoItem {
  id: number;
  todo: string;
}

export interface TodoItemProps {
  item: TodoItem;
  onPress?: (id: number) => void;
}

export interface TodoListProps {
  items: TodoItem[];
}

export interface ToDoFormProps {
  onSubmit: (todo: TodoItem) => void;
}

export interface InitialTodo {
  loading: string;
  todoList: TodoItem[];
  error: null | Error;
}
