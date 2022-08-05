import React from 'react';
import Todo, { TodoProps } from './Todo';

export interface TodoListProps {
  todos: TodoProps[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <Todo {...todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
