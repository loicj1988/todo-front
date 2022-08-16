import React from 'react';
import { Button, Col, ListGroup, Row, Table } from 'react-bootstrap';
import Todo, { TodoProps } from './Todo';

export interface TodoListProps {
  todos: TodoProps[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{ width: '100%' }}>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <Todo key={index} {...todo} />
        ))}
      </tbody>
    </Table>
  );
};

export default TodoList;
