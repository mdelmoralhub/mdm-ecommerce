import React from 'react';
import { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Item = ({itemDetail}) => {
  const [cart, setCart] = useState(null);
  const onAdd = (quantityToAdd) => {
    if(quantityToAdd > 0 && itemDetail.prodStock >= quantityToAdd) {
      itemDetail.prodStock = itemDetail.prodStock - quantityToAdd;
        alert(`Se han agregado ${quantityToAdd} productos al carrito`);
    }
    return setCart(cart + quantityToAdd);
  };
  const terminarCompra = () => {
    console.log('Button clicked! Yendo a la ventana de terminar compra...');
  }
  return (
    <div className="ItemDetail" style={{ padding: 40 }}>
      <h1>{itemDetail.title}</h1>
      <h2>{itemDetail.description}</h2>
      <p>Precio: U$S{itemDetail.price}</p>
      <img src={itemDetail.pictureUrl} style={{ height: '500px', width: 'auto' }} alt={itemDetail.title}></img>
      <p>Stock: {itemDetail.prodStock} unidades</p>
      <ItemCount item={itemDetail} onAdd={onAdd}></ItemCount>
      {cart ? <Link to={'/cart'}><Button onClick={terminarCompra}>Terminar la compra</Button></Link> : null}
    </div>
  );
};

export default Item;