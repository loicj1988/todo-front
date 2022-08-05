const todos: TodoApi[] = [
  {
    title: 'first todo'
  },
  {
    title: 'second todo'
  }
];

export type TodoApi = {
  title: string;
};

export const fetchTodos = async () => {
  return new Promise<TodoApi[]>((resolve) => {
    setTimeout(() => {
      resolve(todos);
    }, 100);
  });
};
