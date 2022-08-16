import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export interface TodoListProps {
  show: boolean;
  onClose: () => void;
  onSave: (title: string) => Promise<void>;
}

const TodoModal: React.FC<TodoListProps> = ({ show, onClose, onSave }) => {
  const [title, setTitle] = useState<string>('');

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Col>
          <Row>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Row>
        </Col>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button
          variant="success"
          onClick={async () => {
            await onSave(title);
            setTitle('');
          }}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TodoModal;
