import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from '../services/productService';
const ProductDetail = () => {

  let {id}=useParams()

  const [product, setProduct] = useState({});
console.log(product.category)
  useEffect(() => {
    let productService = new ProductService();
    productService
    .getProductId(id)
    .then((result) => setProduct(result.data.data));
  }, []);

    return (
        <div>
            <Card.Group>
    <Card fluid >
      <Card.Content >
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>{product.productName}</Card.Header>
        <Card.Meta>{product.category?product.category.categoryName:null}</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Sepete Ekle
          </Button>
          <Button basic color='red'>
            Sepetten Çıkar
          </Button>
        </div>
      </Card.Content>
    </Card>
  
   
  </Card.Group>
        </div>
    );
}

export default ProductDetail;