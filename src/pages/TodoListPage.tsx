import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import TodoList from '../components/TodoList';
import TodoModal from '../components/TodoModal';
import axios from '../util/axios';
import withLoading from '../util/withLoading';

export type TodoApi = {
  id?: string;
  title: string;
  completed: boolean;
};

export default function TodoListPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [todos, setTodos] = useState<TodoApi[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleSaveAddModal: (title: string) => Promise<void> = async (
    title
  ) => {
    setLoading(true);
    await axios.post('/todo', {
      title,
      completed: false
    });

    const { data } = await axios.get<TodoApi[]>('/todo');
    setShowAddModal(false);
    setTodos(data);
    setLoading(false);
  };

  const handleCloseAddModal: () => void = () => setShowAddModal(false);
  const handleShowAddModal: () => void = () => setShowAddModal(true);

  useEffect(() => {
    const init = async () => {
      const { data } = await axios.get<TodoApi[]>('/todo');
      setTodos(data);
      setLoading(false);
    };

    init();
  }, []);

  return (
    <>
      <TodoModal
        show={showAddModal}
        onClose={handleCloseAddModal}
        onSave={handleSaveAddModal}
      />
      <Container>
        <Col>
          <Row>
            <h1>Todos</h1>
            {withLoading(
              <div>
                {todos.length <= 0 && 'No todos ...'}
                {todos.length > 0 && <TodoList todos={todos} />}
              </div>,
              loading
            )}
          </Row>
          <Row>
            <Button variant="success" onClick={handleShowAddModal}>
              Add
            </Button>
          </Row>
        </Col>
      </Container>
    </>
  );
}
