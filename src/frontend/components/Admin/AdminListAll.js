import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminListAll = ({ user, table }) => {
  const [tableArray, setTableArray] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}${table}`);
      setTableArray(res.data);
    })();
  }, [table]);

  const DisplayName = ({ row }) => {
    switch (table) {
      case 'user':
        return `${row.first_name} ${row.last_name}`;
      case 'delivery':
        const date = new Date(row.date)
        return `${date.toDateString()} ${row.instructions}`;
        case 'cart': 
        return `$${row.total_price} - ${row.item_quantity} items`
      default:
        return row.name;
    }
  };

  return (
    <Container className='my-5'>
      <ListGroup>
        {tableArray.map((row) => {
          return (
            <ListGroupItem key={row.id}>
              <Link
                to={`/${table}/edit/${row.id}`}
                style={{ color: 'inherit' }}
              >
                <DisplayName row={row} />
              </Link>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Container>
  );
};

export default AdminListAll;
