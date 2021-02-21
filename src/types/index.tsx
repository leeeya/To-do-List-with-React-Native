export interface TodoItem {
  key: number;
  todo: string;
}

export interface TodoItemProps {
  item: TodoItem;
}

export interface TodoListProps {
  items: TodoItem[];
}

export interface ToDoFormProps {
  onSubmit: (todo: TodoItem) => void;
}
