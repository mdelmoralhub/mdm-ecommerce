import React from 'react';
import {Link} from 'react-router-dom';
//import ItemCount from '../ItemCount/ItemCount';
//import { Card } from 'semantic-ui-react'

const Item = ({ item }) => {
  return (
    <div>
      <Link to={`/detail/${item.id}`}>
        <p>{item.title}</p>
        <img src={item.pictureUrl} style={{ height: '100px', width: 'auto' }} alt={item.title}></img>
      </Link>
    </div>
  );
};

export default Item;

/* <div>
      <p>Producto: {item.title}</p>
      <img src={item.pictureUrl} style={{ height: '100px', width: 'auto'}} alt={item.title}></img>
      <ItemCount stockInitial={item.prodStock} initial='0'></ItemCount>
    </div>*/

    /*<Card>
    <img src={item.pictureUrl} style={{ height: '100px', width: 'auto'}} alt={item.title}></img>
    <Card.Content>
      <Card.Header>{item.title}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        New Product
      </Card.Description>
    </Card.Content>
    <ItemCount stockInitial={item.prodStock} initial='0'></ItemCount>
    </Card>*/

    /*<ItemCount stockInitial={item.prodStock} initial='0'></ItemCount>*/