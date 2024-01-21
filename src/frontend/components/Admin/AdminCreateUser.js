import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

import { handleEditChange } from '../../lib/handleEditChange';
import EditMessage from '../../lib/EditMessage';

const AdminCreateUser = ({ user }) => {
  const [show, setShow] = useState(false);
  const [appUser, setAppUser] = useState({ username: '' });
  const [message, setMessage] = useState();
  const [companies, setCompanies] = useState([]);
  const handleClose = () => {
    setMessage('');
    setShow(false);
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}company`);
      setCompanies(res.data);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(appUser);
    if (appUser.company_id) {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}user/`,
        appUser
      );
      res.statusText === 'OK'
        ? setMessage('User successfully created')
        : setMessage('Something went wrong...');
    }
  };

  return (
    <>
      {' '}
      <Button variant='secondary' onClick={handleShow}>
        Create User
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='userCompany'>
              <Form.Label>Company</Form.Label>
              <Form.Control
                as='select'
                value={appUser.company_id}
                onChange={handleEditChange(appUser, 'company_id', setAppUser)}
              >
                <option>Choose One:</option>
                {companies.map((row) => {
                  return (
                    <option
                      key={row.id}
                      value={row.id}
                    >
                      {row.name}
                    </option>
                  );
                })}</Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='userName'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                value={appUser.username}
                onChange={handleEditChange(appUser, 'username', setAppUser)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='userFirstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                value={appUser.first_name}
                onChange={handleEditChange(appUser, 'first_name', setAppUser)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='userLastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                value={appUser.last_name}
                onChange={handleEditChange(appUser, 'last_name', setAppUser)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='userPhone'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type='tel'
                value={appUser.phone}
                onChange={handleEditChange(appUser, 'phone', setAppUser)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='userEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                value={appUser.email}
                onChange={handleEditChange(appUser, 'email', setAppUser)}
              />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <div className='text-center'>
              <Button variant='dark' type='submit'>
                Update User
              </Button>
            </div>
            <EditMessage message={message} />
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
export default AdminCreateUser;
