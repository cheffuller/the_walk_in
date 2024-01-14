import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminListAll = ({ user, table }) => {
  const [tableArray, setTableArray] = useState([]);
  console.log(table)

  useEffect(() => {
    (async () => {
      const res = await axios.get(`http://localhost:8080/api/${table}`);
      setTableArray(res.data);
    })();
  }, []);

  return (
    <Container className='my-5'>
      {console.log(tableArray)}
      <ListGroup>
        {tableArray.map((row) => {
          return (
            <ListGroupItem key={row.id}>
              <Link to={`/${table}/edit/${row.id}`} style={{color: 'inherit'}} >{row.name}</Link>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Container>
  );
};

export default AdminListAll;