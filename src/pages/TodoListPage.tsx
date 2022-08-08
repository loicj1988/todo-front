import React, { useEffect, useState } from 'react';
import { fetchTodos, TodoApi } from '../api/todos';
import TodoList from '../components/TodoList';

export default function TodoListPage() {
  const [todos, setTodos] = useState<TodoApi[]>([]);

  useEffect(() => {
    const init = async () => {
      const result = await fetchTodos();
      if (result) {
        setTodos(result);
      }
    };

    init();
  }, []);

  return (
    <>
      <h1>Todos</h1>
      <div>
        {todos.length <= 0 && 'No todos ...'}
        {todos.length > 0 && <TodoList todos={todos} />}
      </div>
    </>
  );
}
