import React from 'react';

export interface TodoProps {
  title: string;
}

const Todo: React.FC<TodoProps> = ({ title }) => {
  return (
    <div>
      <div>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Todo;
