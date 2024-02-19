import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

const UserSet = ({ appUser, setAppUser, allUsers }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    allUsers.map((user) => {
      if (user.id === e.target.value) {
        setAppUser(user);
        localStorage.setItem('userID', JSON.stringify(user.id))
      }
      return <></>;
    });
  };

  const UsernameToggle = () => {
    return (appUser.username) ? appUser.username : 'Choose Account'
  }

  return (
    <>
      <Button onClick={handleShow} className='me-3' size='sm' >
        <UsernameToggle />
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Set User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='userCompany'>
              <Form.Label>User</Form.Label>
              <Form.Control
                as='select'
                value={appUser.id}
                onChange={handleChange}
              >
                <option>Choose One:</option>
                {allUsers.map((row) => {
                  return (
                    <option key={row.id} value={row.id}>
                      {row.username} {row.first_name} {row.last_name}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
            <div className='text-center'>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserSet;
