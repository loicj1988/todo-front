import axiosInstance from '../util/http';

export type TodoApi = {
  title: string;
};

export const fetchTodos = async () => {
  // const a: TodoApi[] = [
  //   {
  //     title: 'a'
  //   }
  // ];
  // return a;
  try {
    const { data, status } = await axiosInstance.get<TodoApi[]>('/todo');

    if (!status.toString().startsWith('2')) {
      throw new Error(`Failed to fetch todo: response code ${status}`);
    }

    if (!data) {
      throw new Error(`Failed to fetch todo: data is undefined`);
    }

    return data;
  } catch (error) {
    console.log('axios http error', error);
    return null;
  }
};
