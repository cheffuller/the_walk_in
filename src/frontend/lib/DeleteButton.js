import { Button } from 'react-bootstrap';

const DeleteButton = ({ user }) => {
    console.log(user)
  if (user.admin) {
    return <Button variant='dark'>Delete</Button>;
  }
};

export default DeleteButton;
