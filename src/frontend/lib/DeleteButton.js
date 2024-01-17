import { Button } from 'react-bootstrap';

const DeleteButton = ({ user }) => {
  if (user && user.admin) {
    return <Button variant='dark'>Delete</Button>;
  }
};

export default DeleteButton;
