import axios from 'axios';
import React from 'react';
import { Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

const api = "https://fakestoreapi.com/products"
const {data:products} = await axios.get(api);
console.log(products);

const Products = () => {
    
    return (
        <div className='container'>
            <h1>These are products</h1>
            <Row xs={1} md={2} lg={3} className='g-4'>
            {
                products.map(product=><ProductCard 
                    
                product={product}
                key={product.id}
                ></ProductCard>)
            }
            </Row>
        </div>
    );
};

export default Products;