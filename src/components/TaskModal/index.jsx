import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function TaskModal(props) {
  return (
    <Modal
      { ...props }
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal Heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Conteúdo do modal
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={ onHide }>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function RenderModal() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Carregar modal
      </Button>
      <TaskModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></TaskModal>
    </>
  )
};

export default RenderModal;
