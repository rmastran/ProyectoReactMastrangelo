import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({info}) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={info.img} />
        <Card.Body>
          <Card.Title>{info.title}</Card.Title>
          <Card.Text>
            {info.description}
          </Card.Text>
          <Card.Text>
            ${info.price}
          </Card.Text>
          <Button as={Link} to={`/item/${info.id}`} variant="primary">Ver más</Button>
        </Card.Body>
      </Card>
    );
}

export default Item;