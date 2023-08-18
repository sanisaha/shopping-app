import React from 'react';
import { Button, Card, Col} from 'react-bootstrap';

const ProductCard = ({product}) => {
    return (
        <Col >
        <Card className='mb-3 h-100'>
      <div className='row g-0'>
        <div className='col-md-4 w-50'>
        <Card.Img className='w-100 h-75' variant="top" src={product.image} />
        </div>
      <div className='col-md-8 w-50'>
      <Card.Body className=''>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         { product.description.length > 130? <> {product.description.slice(0,150) + '.....'}</> : product.description}
        </Card.Text>
        <Card.Text>
          price:<span className='fs-2'>{product.price}</span>
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
      </div>
        
      </div>
    </Card>
        </Col>
    );
};

export default ProductCard;