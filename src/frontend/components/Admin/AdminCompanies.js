import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminCompanies = ({ user }) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`http://localhost:8080/api/company`);
      setCompanies(res.data);
    })();
  }, []);

  return (
    <Container className='my-5'>
      {console.log(companies)}
      <ListGroup>
        {companies.map((company) => {
          return (
            <ListGroupItem key={company.id}>
              <Link to={`/company/edit/${company.id}`}>{company.name}</Link>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Container>
  );
};

export default AdminCompanies;
