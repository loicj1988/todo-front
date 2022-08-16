import React, { useState } from 'react';
import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import axios from '../util/axios';

export interface TodoProps {
  id?: string;
  title: string;
  completed: boolean;
}

const Todo: React.FC<TodoProps> = ({
  id,
  title: initialTitle,
  completed: initalCompleted
}) => {
  const [title, setTitle] = useState<string>(initialTitle);
  const [completed, setCompleted] = useState<boolean>(initalCompleted);
  const [initialized, setInitialized] = useState<boolean>(false);

  const handleCheckCompleted: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void> = async (e) => {
    setCompleted(e.target.checked);
  };

  const handleTitleChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void> = async (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    const update = async () => {
      await axios.put(`/todo/${id}`, {
        title,
        completed
      });
    };

    if (initialized) {
      update();
    }
    setInitialized(true);
  }, [completed, title]);

  return (
    <tr>
      <td>
        <Form.Control value={title} onChange={handleTitleChange} />
      </td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <Form.Check
          type="checkbox"
          checked={completed}
          onChange={handleCheckCompleted}
        />
      </td>
    </tr>
  );
};

export default Todo;
