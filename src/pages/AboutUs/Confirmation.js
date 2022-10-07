import Modal from "react-bootstrap/Modal";

function ConfirmationDialog({ show, setShow }) {
  return (
    <>
      <Modal show={show} size="lg" onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Request Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The SlickNSpan Team will get back to you as soon as possible
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ConfirmationDialog;
